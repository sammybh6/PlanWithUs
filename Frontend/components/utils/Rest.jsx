import axios from 'axios'

const Url = 'http://localhost:8000/api/v1/'

const fetchData = async(path, auth) => {
    if (auth) {
        return await axios.get(`${Url}${path}`, {
            withCredentials: true,
        })
    }
    else {
        return await axios.get(`${Url}${path}`)
    }
}

const postData = async (path, auth, postd) => {
    if (auth) {
        const res=await axios.post(`${Url}${path}`, postd, {
            withCredentials: true,
        })
        return res;

    }
    else {
        const res=await axios.post(`${Url}${path}`, postd)
        return res.data;
    }
}


export { fetchData, postData } 