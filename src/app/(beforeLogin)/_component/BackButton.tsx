'use client';
import styles from "@/app/(beforeLogin)/_component/login.module.css";
import {router} from "next/client";

export default function BackButton() {
  const onClickClose = () =>{
    router.back();
  };
  return (
    <button className={styles.closeButton} onClick={onClickClose}>
      <span className="material-symbols-rounded">close</span>
    </button>
  );
};
