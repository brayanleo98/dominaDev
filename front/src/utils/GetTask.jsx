import { client } from "../api/Client";

const storedData = JSON.parse(localStorage.getItem('myData'));
export const GetTask = async (_id) => {
    const data = await client.get(`/task/feature/${_id}`, { headers: { 'Authorization': storedData.token } });
    return data;
}