
import { client } from "../api/Client";

export const singUp = async (email, password, name) => {
    const data = await client.post('/signup', { email, password, name });
    return data;
}