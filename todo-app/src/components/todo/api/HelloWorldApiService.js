
import { apiClient } from './ApiClient'


export const retrieveHelloWorldBean =
() => apiClient.get("/hello-world-bean")



// Response to preflight request doesn't pass access control check => Authorization header
// 프리 플라이트 오류 발생! 
// 헤더를 받는 방법을 알아야함.
export const retrieveHelloWorldBeanPathVariable =
(name, token) => apiClient.get(`/hello-world/path-variable/${name}`
// , 
// {
//     headers: {
//         Authorization: token
//     }
// }
)



// export const executeBasicAuthenticationService =
// (token) => apiClient.get(`/basicauth`, 
// {
//     headers: {
//         Authorization: token
//     }
// })