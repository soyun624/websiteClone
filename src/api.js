import axios from 'axios'


const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
       //ket: process.env.REACT_APP_YT_API_KEY,
      key: 'AIzaSyCcGAHh9fFM-UcqSMxbxfYyBW4P-Nnho78',
   },
})

export default request