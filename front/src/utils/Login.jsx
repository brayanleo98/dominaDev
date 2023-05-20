
import { client } from "../api/Client";

export const login = async (email, password) => {
    const data = await client.post('/login', { email, password });
    return data;
}