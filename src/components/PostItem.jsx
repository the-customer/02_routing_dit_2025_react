import React from 'react'
import { DEFAULT_IMG_PROFILE } from '../const/Const'
import { useNavigate } from 'react-router-dom';

export default function PostItem({ posts, handleDeletePost }) {

    const navigate = useNavigate();
    function handleUpdatePost(id) {
        navigate(`/create`, { state: { id } });
    }
    return (
        <>
            {posts.map(post => (
                <div key={post.id} className="p-6 border-b relative mb-2">
                    <img src={post.image} alt="User avatar" className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.06] z-[-1]" />
                    <div className="mb-4 flex justify-between items-start">
                        <div className='flex flex-col items-start'>
                            <h2 className="font-bold mb-2 text-lg text-indigo-500">{post.title}</h2>
                            <div className="flex items-center">
                                <img src={post.image} alt={post.title} className="mr-2 w-60 h-40 object-cover" />
                                <p className="text-gray-500 text-sm">
                                    {post.body.length > 500 ? post.body.slice(0, 500) + '...' : post.body}
                                </p>
                            </div>
                            <small className="text-gray-500 text-xs">Posted on :{post.created_at}</small>
                        </div>

                        <div className="flex items-center">
                            <button
                                className='cursor-pointer'
                                onClick={() => handleDeletePost(post.id)} >
                                <i className="fas fa-trash-alt text-red-500"></i>
                            </button>
                            <button
                                onClick={() => handleUpdatePost(post.id)}>
                                <i className="fas fa-edit text-yellow-500 cursor-pointer"></i>
                            </button>

                        </div>

                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src={DEFAULT_IMG_PROFILE} alt="User avatar" className="rounded-full mr-2 w-8 h-8" />
                            <span className="text-gray-500 text-xs">Posted by {post.user}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-gray-500 text-xs mr-2">
                                <i className="fas fa-comment mr-1"></i>{post.comments.length}
                            </span>
                            <span className="text-gray-500 text-xs"><i className="fas fa-heart mr-1 text-red-500"></i>{post.likes}</span>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}
