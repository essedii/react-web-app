import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Posts = () => {

    const[randomUserDataJSON, setRandomUserDataJSON] = useState('')
    const[userInfos, setUserInfos] = useState([])

    const fetchRandomData = () => {
        return axios.get('https://randomuser.me/api')
            .then( ({data}) => {
                return (data)
            })
            .catch(err => {
            console.log(err);
            })

    }

    const getFullUserName = (userInfo) => {
        const {name: {first, last}} = userInfo;
        console.log()
        return `${first} ${last}`;
    }

    useEffect(() => {
                fetchRandomData().then(randomData => {
                    setRandomUserDataJSON(JSON.stringify(randomData, null, 2) || 'No user found');
                    setUserInfos(randomData.results);
                })
            },[])

    return (
        <div>
            {
                userInfos.map((userInfo) => {
                    return <pre>{getFullUserName(userInfo)}</pre>
        
            
        })}
        {/* <pre>{randomUserDataJSON}</pre> */}
        </div>
       
    )
}








//     const[randomUserDataJSON, setRandomUserDataJSON] = useState()




//     const fectchRandomData = () => {
//         return axios.get('https://randomuser.me/api/')
//             .then((res) => {
//                 console.log(res.data)
//                 return JSON.stringify(res.data);
//         })
//             .catch(err => {
//                 console.log(err)
//         })
//     }

//     useEffect(() => {
//         fectchRandomData().then(randomData => {
//             setRandomUserDataJSON(randomData)
//         })
//     })
//   return (
//     <div>
//             <ul>
//         {randomUserDataJSON.map(userDataJSON => {
//             <li key={userDataJSON.id}>{userDataJSON.title}</li>
//         })}
//     </ul>
//     </div>

//   )
// }


export default Posts