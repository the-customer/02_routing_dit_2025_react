import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <header className="border-b pb-4">
                <nav className="flex items-center justify-between">
                    <h1 className="font-bold text-indigo-600 cursor-pointer">My Blog</h1>
                    <div>
                        <Link to="/" className="px-3 py-1 rounded-md hover:bg-indigo-600 hover:text-white cursor-pointer">Home</Link>

                        <Link to="/create" className="px-3 py-1 rounded-md hover:bg-indigo-600 hover:text-white cursor-pointer">New Post</Link>
                    </div>
                </nav>
            </header>


            <main className="container mx-auto px-4 py-8">
                <Outlet />
            </main>



            <footer className="border-t pt-4 mt-4 text-center">
                <p className="text-sm text-gray-500">Copyright &copy; 2025</p>
            </footer>
        </>
    )
}
