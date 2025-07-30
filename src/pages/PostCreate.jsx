import React from 'react'

export default function PostCreate() {
    return (
        <>
            <div className="max-w-2xl mx-auto">
                <form>
                    <div className="mb-8 flex flex-col items-start">
                        <label>Title</label>
                        <input
                            value=""
                            type="text"
                            className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2" />
                    </div>
                    <div className="mb-8 flex flex-col items-start">
                        <label>Image</label>
                        <input
                            value=""
                            type="text"
                            className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2" />
                    </div>
                    <div className="mb-8 flex flex-col items-start">
                        <label>Content</label>
                        <textarea
                            value=""
                            className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2" />
                    </div>
                    <button className="bg-indigo-400 text-white block w-full p-2 rounded-lg hover:bg-indigo-600">Create</button>
                </form>
            </div>
        </>
    )
}
