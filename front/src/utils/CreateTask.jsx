import { client } from "../api/Client";
const storedData = JSON.parse(localStorage.getItem('myData'));
export const CreateTask = async (_id, name, description, duration) => {
    const data = await client.post('/task/feature', { _id, name, description, duration },{ headers: {'Authorization': storedData.token} });
    return data;
}