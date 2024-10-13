const apiService = {
    get: async function (url: string): Promise<any> {
        console.log("gettttt", url);

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'GET',
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
            .catch(error => {
                console.error("Error:", error);
                reject(error);
            })
        })
        
    },
}

export default apiService;