import { getAccessToken } from "../lib/actions";

const apiService = {
    get: async function (url: string): Promise<any> {
        console.log("gettttt", url);
        const token = await getAccessToken();

        return new Promise((resolve, reject) => {
            console.log('API Host:', process.env.NEXT_PUBLIC_API_HOST);
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
                .then(response => response.json())
                .then((json) => {
                    console.log("JSON response", json);
                    resolve(json);

                })
                .catch((error => {
                    console.error("Error:", error);
                    reject(error);
                }))
        })

    },
    post: async function (url: string, data: any): Promise<any> {
        console.log("posttttt", url, data);
        const token = await getAccessToken();
        console.log('API Host:', process.env.NEXT_PUBLIC_API_HOST);
        console.log("Access Token from Cookies:", token);
        
        return new Promise((resolve, reject) => {
            // Check if data is FormData; if not, create FormData
            const formData = data instanceof FormData ? data : new FormData();
            
            // If you need to add properties to FormData, do it like this:
            // if (!data instanceof FormData) {
            //     Object.keys(data).forEach(key => {
            //         formData.append(key, data[key]);
            //     });
            // }
    
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'POST',
                body: formData, // Use FormData directly
                headers: {
                    'Authorization': `Bearer ${token}`,
                    // Do not set Content-Type here; the browser does it automatically
                },
            })
            .then(async (response) => {
                const contentType = response.headers.get("content-type");
                const text = await response.text(); // Read as text first for logging
                
                console.log("Raw response:", text); // Log the raw response for debugging
                
                if (contentType && contentType.includes("application/json")) {
                    return JSON.parse(text); // Parse JSON only if content type is correct
                } else {
                    throw new Error("Received non-JSON response: " + text); // Provide the raw response in the error
                }
            })
            .then((json) => {
                console.log("JSON response", json);
                resolve(json);
            })
            .catch((error) => {
                console.error("Error:", error);
                reject(error);
            });
        });
    },
    
    
    postWithOut: async function (url: string, data: any): Promise<any> {
        console.log("posttttt", url, data);
        console.log('API Host:', process.env.NEXT_PUBLIC_API_HOST);
        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
                .then((json) => {
                    console.log("JSON response", json);
                    resolve(json);

                })
                .catch((error => {
                    console.error("Error:", error);
                    reject(error);
                }))
        });
    }
}

export default apiService;