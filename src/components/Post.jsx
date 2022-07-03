import React from 'react'
import { useNavigate } from 'react-router-dom';

const Post = ({id}) => {
    const url = 'https://picsum.photos';
    const navigate = useNavigate()

    return (
        <div>
            <img onClick={()=> navigate(`/posts/${id}`)} className='img-fluid col m-0' src={`${url}/id/${id}/400/600`}></img>
        </div>
       
  )
}

export default Post