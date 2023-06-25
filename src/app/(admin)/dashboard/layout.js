import Link from "next/link";


export default function AdminLayout({ children }) {
	return (
        <div className="container min-h-screen flex flex-col md:flex-row gap-5">
            <aside className="bg-stone-900 text-white md:block flex">
                <div className="border-b-2 md:pl-5 md:pr-20 md:py-3 p-3 text-center md:text-start transition-all duration-300 hover:bg-stone-700">
                <Link href={'/dashboard'}>Dashboard</Link>
                </div>
                <div className="border-b-2 md:pl-5 md:pr-20 md:py-3 p-3 transition-all duration-300 hover:bg-stone-700">
                <Link href={'/dashboard/addproduct'}>Create Product</Link>
                </div>
            </aside>
            <main className=" flex-1">
                {children}
            </main>
        </div>
	);
}
