"use client"; /* 클라이언트 컴포넌트 전환 */
import React, {useEffect} from 'react';
/*
  * 특수한 컴포넌트 (서버 컴포넌트, 클라이언트 컴포넌트 )
  * 기본적으로 리액트는 클라이언트 컴포넌트입니다. (클라이언트 내부에서 돌기 때문)
  *
  * NextJS는 서버사이드 랜더링이기 때문에 기본적으로 셋팅되어 있는 "page.tsx, layout.tsx"는 서버 컴포넌트입니다.
  * 그렇기 때문에 React에서 당연하게 쓸 수 있었던 기존 클라이언트 훅들 useState, useEffect, useMemo... 는 사용 할 수 없습니다.
  * 해당 컴포넌트를 서버 컴포넌트에서 사용 할 수 없기 때문에 해당 서버 컴포넌트를 클라이언트로 변환해야 합니다.
  *
  * 클라이언트 컴포넌트로 변환하는 방법은 맨 상단에 "use client"를 선언해야 됩니다.
  *
  * 서버 컴포넌트 -> 클라이언트 컴포넌트로 변환 시 생기는 단점
  * 데이터 관점에서 생기는 장점들이 사라집니다.
  *
  *   *
  *
  *
  * */
export default function MswComponent() {

  useEffect(() => {
    if(typeof window !== 'undefined'){
      if(process.env.NEXT_PUBLIC_API_MOCKING === "enabled"){
        require("@/mocks/browser");
      }
    }

  }, []);

  return null;
};

