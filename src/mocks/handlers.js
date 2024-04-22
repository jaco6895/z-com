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
    http.post(`/api/users`,async ()=>{
        // 실패 했을 경우
        // return HttpResponse.text(JSON.stringify('user_exists'),{
        //     status: 403
        // })
        // 성공 했을 때
        return HttpResponse.text(JSON.stringify('ok'),{
              headers:{
              'Set-Cookie':`connect.sid=msw-cookie;HttpOnly;Path=/`
              }
          })
    })
];