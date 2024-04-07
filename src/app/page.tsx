import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        이미지 영역
      </div>
      <div>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href={"/i/flow/sign"}>계정 만들기</Link>
        <Link href={"/login"}>로그인 하기</Link>
      </div>
    </div>
  );
}
