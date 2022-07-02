import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Posts = () => {
    const url = 'https://picsum.photos';
    //Page starts from 2 for purely aestetical reason (first page has ugly images)
    const [page, setPage] = useState(2);
    const [limit, setLimit] = useState(10);
    const [id, setId] = useState();
    const [size, setSize] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [imageListUrl, setImageListUrl] = useState();
    const [image, setImage] = useState();
    const [imagesList, setImagesList] = useState([]); 
    const [filtered, setFiltered] =useState([]);

    useEffect( () => {
        axios
            .get(`${url}/v2/list?page=${page}&limit=${limit}`)
            .then(res => {
                setImagesList(res.data)
                console.log(res.data, 'resdata')
            })
            .catch(err => {
                console.log(err)
            })
        },[]);
    
    useEffect( () => {

    })


    return (
      <div className='d-flex  flex-row align-items-center'  >
        {imagesList.map(image => {
            return <img className='img-thumbnail' src={`${url}/id/${image.id}/400/600`}></img> 
        }
           
        )}
      </div>
    )
    
}


export default Posts

    