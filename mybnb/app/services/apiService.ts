const apiService = {
    get: async function (url: string): Promise<any> {
        console.log("gettttt", url);

        return new Promise((resolve, reject) => {
            console.log('API Host:', process.env.NEXT_PUBLIC_API_HOST);
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
                .catch((error => {
                    console.error("Error:", error);
                    reject(error);
                }))
        })

    },
    post: async function (url: string, data: any): Promise<any> {
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