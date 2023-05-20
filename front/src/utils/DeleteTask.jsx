import { client } from "../api/Client";
const storedData = JSON.parse(localStorage.getItem('myData'));
export const DeleteTask = async (_id) => {
    const data = await client.delete(`/task/feature/${_id}`,{ headers: {'Authorization': storedData.token} });
    return data;
}