import { HttpResponse, http } from 'msw';

export const handlers = [
    http.post(`/api/login`,()=>{
        return HttpResponse.json({
            userId:1,
            nickname:"Jisu94",
            id:"jisu94",
            image:`/fLogo.png`
        },{
            headers:{
            'Set-Cookie':`connect.sid=msw-cookie;HttpOnly;Path=/`

            }
        })
    }),
    http.post(`/api/login`,()=>{
        return new HttpResponse(null,{
            headers:{
                'Set-Cookie':`connect.sid=;HttpOnly;Path=/;Max-Age=0`

            }
            }

        )
    })
];