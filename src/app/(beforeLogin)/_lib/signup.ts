"use server";

import {redirect} from "next/navigation";

export default async (formData:FormData,prevStatus:any) =>{
  "use server"; //이후 부터 서버 코드를 작성 할 수 있습니다. << 이는 프론트엔드 서버를 뜻합니다. 함수 안에 작성 할 수 있습니다.
  let shouldRedirect = false;
  const formKeyArr = ['id','name','password','profile'];
  let formKeyIdx = 0;
  console.log(formData.get('name'));
  // Validation
  if( formKeyArr.some((key,idx)=> { formKeyIdx = idx;  return !formData.get(key) }) ){
    return { massage:`no_${formKeyArr[formKeyIdx]}` }
  }
  // Validation을 통과하면 서버에 데이터 보내기
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,{
      method:"post",
      body:formData,
      credentials:'include' // 해당 옵션이 존재할 경우 서버에서 받은 쿠키를 그대로 셋팅해서 보냅니다.
    });

    switch (response.status) {
      // 서버 응답코드가 403 일 때 (이는 백단 개발자와 합의 필요)
      case 403:

        shouldRedirect = false;
        return {message : "user_exists"}
      default:
        shouldRedirect = true;
        break;
    }

  }catch (e){
    shouldRedirect = false;
    console.error(e);
    return;
  }

  // redirect는 try, catch문에 절대 사용 하지 마세요.
  if(shouldRedirect){
    redirect('/home');
  }

};