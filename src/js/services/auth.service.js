import axios from "axios";

export async function login(email,password) {
    try {
        const response = await axios.post("http://localhost:5000", JSON.stringify({email,password}),
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        console.log(response)
        return response.data
    }
    catch(err){
        console.log(err);
        return Promise.reject(err);
    }
}