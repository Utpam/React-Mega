import React from 'react'
import PostForm from '../components/Postform/PostForm'
import Container from '../components/container/Container'
import { useSelector } from 'react-redux'

function AddPost() {
  const post = useSelector(state => state.auth.userData)
  return (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  )
}

export default AddPost