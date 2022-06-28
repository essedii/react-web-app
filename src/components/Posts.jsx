import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Posts = () => {
    const[randomUserDataJSON, setRandomUserDataJSON] = useState([])

    const fectchRandomData = () => {
        return axios.get('https://randomuser.me/api/')
            .then((res) => {
                console.log(data);
                return JSON.stringify(res.data);
        })
            .catch(err => {
                console.log(err)
        })
    }

    useEffect(() => {
        fectchRandomData().then(randomData => {
            setRandomUserDataJSON(randomData)
        })
    })
  return (
    <div>
            <ul>
        {randomUserDataJSON.map(userDataJSON => {
            <li key={userDataJSON.id}>{userDataJSON.title}</li>
        })}
    </ul>
    </div>

  )
}

export default Posts