import { client } from "../api/Client";
const storedData = JSON.parse(localStorage.getItem('myData'));
export const UpdateTask = async (_id, name, description, duration) => {
    const data = await client.put('/task/feature', { _id, name, description, duration }, { headers: { 'Authorization': storedData.token } });
    return data;
}