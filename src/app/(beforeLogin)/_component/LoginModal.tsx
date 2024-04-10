"use client"; /* 클라이언트 컴포넌트 전환 */
import styles from "@/app/(beforeLogin)/@modal/(.)i/flow/login/login.module.css";
import {useState} from "react";
export default function LoginModal(){
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
  const [id,setId] = useState();
  const [password,setPassword] = useState();
  const [message,setMessage] = useState();

  const onSubmit = () =>{

  };
  const onClickClose = () =>{

  };
  const onChangeId = () =>{

  };
  const onChangePassword = () =>{

  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHead}>
          <button className={styles.closeButton} onClick={onClickClose}>
            <span className="material-symbols-rounded">close</span>
          </button>
          <div>로그인하세요.</div>
        </div>

        <form onSubmit={onSubmit}>
          <div className={styles.modalBody}>
            <div className={styles.inputWrapper}>
              <label className={styles.inputLabel} htmlFor="id">아이디</label>
              <input type="text" name="id" id="id" className={styles.input} value={id} onChange={onChangeId} placeholder={""}/>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.inputLabel} htmlFor="password">비밀번호</label>
              <input type="password" name="password" id="password" className={styles.input} value={password} onChange={onChangePassword} placeholder={""}/>
            </div>
          </div>
          <div className={styles.message}>{message}</div>
          <div className={styles.modalFooter}>
            <button className={styles.actionButton} disabled={!id && !password}>로그인하기</button>
          </div>
        </form>
      </div>
    </div>
  );
}