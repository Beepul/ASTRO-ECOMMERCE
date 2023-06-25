import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Jost } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import ReduxProvider from '@/redux/ReduxProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '@/utils/AuthProvider/AuthProvider';
import PaypalProvider from '@/utils/PaypalProvider/PaypalProvider';


const jost = Jost({ subsets: [ 'latin' ] });

export const metadata = {
	title: 'ASTRO',
	description: "People's first choice"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={jost.className}>
				<ReduxProvider>
					<PaypalProvider>
					<AuthProvider>
						<ToastContainer position="bottom-center" limit={1} />
						<Navbar />
						{children}
						<Footer />
					</AuthProvider>
					</PaypalProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
