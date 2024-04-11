import Link from "next/link";
import styles from "@/app/page.module.css";
import fLogo from "../../../public/fish.png";
import Image from "next/image";
export default function Home() {
  /*
  * style
  * tailwind -> 호불호가 심하고 가독성이 좋지 않다
  * styled component -> server component SSR
  * vanila extract -> window와 문제가 있다
  * sass -> css 컴파일러
  * css module -> 간단하게 하기 위해
  * */
  return (
    <>
      <div className={styles.left}>
        <Image src={fLogo} alt={"Logo"} priority/>
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href={"/i/flow/signup"}>계정 만들기</Link>
        <Link href={"/i/flow/login"}>로그인 하기</Link>
      </div>
    </>
  );
}
