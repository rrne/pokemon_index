import api from "./utils";

const getList = async ({id}:{id:number}) => {
    const res = await api.get(`/pokemon/${id}`).then(res => res.data);
    return res;
}

export default getList;