import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Posts = () => {
    const url = 'https://picsum.photos';
    //Page starts from 2 for purely aestetical reason (first page has ugly images)
    const [page, setPage] = useState(2);
    const [limit, setLimit] = useState(8);
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
      <div className='d-flex row align-items-center m-0 w-100'  >
        {imagesList.map(image => {
            return <div className='col-12 col-md-6 col-xl-3 col-3 col-md-6 p-0'> 
                        <img className='img-fluid col m-0' src={`${url}/id/${image.id}/400/600`}></img> 
                    </div> 
        }
           
        )}
      </div>
    )
    
}


export default Posts

    