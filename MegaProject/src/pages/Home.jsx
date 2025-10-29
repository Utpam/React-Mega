import React, { useEffect, useState } from 'react'
import service from '../appwrite/conf'
import Container from '../components/container/Container'
import { useSelector } from 'react-redux'
import PostCard from '../components/PostCard'

function Home() {
    const authStatus = useSelector(state => state.auth.status)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts()
            .then((post) => {
                if(post && post.rows && post.rows.length > 0) {
                    setPosts(post.rows)
                }
                else {
                    setPosts([])
                }
            })
    },[authStatus])

    if(posts.length === 0){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                {authStatus ? 'No Posts yet':'Login to read posts'}
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    else{
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
    }
}

export default Home