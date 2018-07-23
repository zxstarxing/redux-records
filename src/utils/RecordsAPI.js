import axios from 'axios';
const api = process.env.REACT_APP_RECORDS_API_URL || "https://5b5568c7503d920014688707.mockapi.io/"

const getAll = () => axios.get(`${api}/records`);

const push = (params)=>axios.post(`${api}/records`,params);

const remove = (id)=>axios.delete(`${api}/records/${id}`);

const update = (id,params)=>axios.put(`${api}/records/${id}`,params)

export {
    getAll,
    push,
    remove,
    update
}