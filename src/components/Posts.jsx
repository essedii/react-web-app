import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Posts = () => {
}


    // axios.get('/user', {
    //     params: {
    //       ID: 12345
    //     }
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });  





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