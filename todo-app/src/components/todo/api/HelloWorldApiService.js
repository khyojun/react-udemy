
import axios from 'axios'






const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)


export const retrieveHelloWorldBean =
() => apiClient.get("/hello-world-bean")

export const retrieveHelloWorldBeanPathVariable =
(name) => apiClient.get(`/hello-world/path-variable/${name}`)