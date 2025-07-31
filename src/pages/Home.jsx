import React, { useEffect, useState } from 'react'
import PostItem from '../components/PostItem'
import Loader from '../components/Loader';
import { API_URL } from '../const/Const';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/posts`)
            .then(response => response.json())
            .then(data => {
                const tab = [1, 2, 3];
                tab.sort((a, b) => a - b);
                console.log(tab);
                data.sort((a, b) => b.id - a.id);
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error.message)
            });
    }, []);

    function deletePost(id) {
        const rep = confirm("Are you sure you want to delete this post?");
        if (rep) {
            //Suppression du post cote front
            const undeletedPosts = posts.filter(post => post.id !== id);
            setPosts(undeletedPosts);
            //suppression du post cote back
            fetch(`http://localhost:3000/posts/${id}`, { method: 'DELETE' });
        }

    }



    return (
        <>
            {loading && <Loader />}
            <PostItem
                posts={posts}
                handleDeletePost={deletePost} />
        </>
    )
}
