import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials';
import connectToDB from "@/backend/db/db";
import User from "@/backend/models/User";
import bcrypt from 'bcryptjs'


const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
        id:"credentials",
        name:"Credentials",
        async authorize(credentials){
            await connectToDB();
            try {
                const user = await User.findOne({email: credentials.email});
                if(user){
                    const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password);
                    if(isPasswordCorrect){
                        console.log(user)
                        return {
                          name: user.name,
                          email: user.email,
                          isAdmin: user.isAdmin,
                          id: user._id,
                          image:"f"
                        }
                    }else{
                        throw new Error("Wrong credentials");
                    }
                }else{
                    throw new Error("User not found")
                }
            } catch (error) {
                throw new Error(error)
            }
        }
    })
  ],
  session:{
    strategy: 'jwt'
  },
  callbacks:{
    async jwt({token,user}){
        if(user?._id) token._id = user._id;
        if(user?.id) token.isAdmin = user.isAdmin;
        return token;
      },
      async session({session,token}){
        if(token?.id) session.user._id = token._id
        if(token?.isAdmin) session.user.isAdmin = token.isAdmin;
        return session
    }
  },
  pages:{
    signIn: '/login',
    error:'/login'
  }
})

export { handler as GET, handler as POST}
