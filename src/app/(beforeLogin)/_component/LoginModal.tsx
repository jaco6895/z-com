import styles from "@/app/(beforeLogin)/_component/login.module.css";
import {router} from "next/client";
import BackButton from "@/app/(beforeLogin)/_component/BackButton";

export default function LoginModal(){
  let id = '';
  let password = '';
  let message = '';
  const onSubmit = () =>{

  };

  const onChangeId = () =>{

  };
  const onChangePassword = () =>{

  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHead}>
          <BackButton />
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