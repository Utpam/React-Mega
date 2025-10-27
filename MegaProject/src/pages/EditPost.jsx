import React, { useEffect, useState } from 'react'
import Container from '../components/container/Container'
import PostForm from '../components/Postform/PostForm'
import service from '../appwrite/conf'
import { useNavigate, useParams } from 'react-router-dom'


export default function EditPost() {

  const [post, setPost] = useState([])
  const {slug} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if(slug) {
      service.getPost(slug)
        .then((post) => {
          if(post) {
            setPost(post)
          }
        })
    } else{
      navigate('/')
    }
  }, [slug, navigate])

  return (
    <div>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  )
}
