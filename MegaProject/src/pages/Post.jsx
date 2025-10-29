import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/conf'
import { useSelector } from 'react-redux'
import PostCard from '../components/PostCard'
import parse from 'html-react-parser'
import Container from '../components/container/Container'
import config from '../config/config'
import { Link } from 'react-router-dom'
import { Button } from '../components'

function Post() {

    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    const userData = useSelector((state) => state.auth.userData)

    const isAuthor = post && userData ? post.userId === userData.$id : false

    useEffect(() => {
        if(slug){
            service.getPost(slug)
                .then((post) => {
                    if(post) {
                        setPost(post)
                    } else {
                        navigate('/')
                    }
                })
        }
    },[slug, navigate])

    const deletePost = () => {
        service.deletePost(post.$id)
            .then((status) => {
                if(status) {
                    service.deleteFile(post.featuredImage)
                }
                else{
                    navigate('/')
                }
            })
    }

  return (
    post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={service.getFilePreview(config.bucketId,post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null
)
}

export default Post