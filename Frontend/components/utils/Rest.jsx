import axios from 'axios'

const Url = 'http://localhost:8000/api/v1/'

const fetchData = (path, auth) => {
    if (auth) {
        axios.get(`${Url}/${path}`)
            .then(function (res) {
                return res;
            }).catch(function (error) {
                console.error(error)
            })
    }
    else {
        axios.get(`${Url}/${path}`)
            .then(function (res) {
                return res;
            }).catch(function (error) {
                console.error(error)
            })
    }
}

const postData = (path, auth, postd) => {
    if (auth) {
        axios.post(`${Url}/${path}`, postd)
            .then(function (res) {
                return res;
            }).catch(function (error) {
                console.error(error)
            })
    }
    else {
        axios.post(`${Url}/${path}`, postd)
            .then(function (res) {
                return res;
            }).catch(function (error) {
                console.error(error)
            })
    }
}


export { fetchData, postData } 