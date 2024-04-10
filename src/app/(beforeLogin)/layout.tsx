import {ReactNode} from "react";
import styles from "@/app/page.module.css";

type Props = { children: ReactNode, modal: ReactNode };

/**
 * 패러랠 라우터
 * "@modal" : 폴더명 앞에 @가 붙으면 패러랠 라우트를 쓴다는 선언 입니다. 이는 두개의 페이지를 동시에 보여준다는 뜻입니다.
 *   대체로 modal, alert, tooltip 등 다양한 곳에 쓰입니다.
 *   * 주의
 *    1. 패러렐 라우터를 쓰기 위해서는 페이지1(기본 바탕이 되는 페이지)가 페이지2(추가로 보여질 target 페이지 )와 같은 경로에 있어야 됩니다.
 *    2. 해당하는 경로에 layout.tsx가 필요합니다 (두 페이지를 동시에 보여주는 영역이 필요 )
 *    3. 선헌할 때 @를 뗀 {modal} 로 선언해야 됩니다.
 *
 *    * 주의
 *    폴더 위치와, 파일명의 역할에 따라 주소에 들어가는 경로 파일이 달라집니다.
 *    헷갈릴 경우 이해 될 때까지 반복해서 이해 필요합니다.
 *
 *    주소가 "/" 일 때 children은 해당 경로의 -> page.tsx, modal -> @modal/default.tsx
 *    주소가 "/i/flow/login"일 때는 children은 해당 경로의 -> i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx
 *
 *  인터셉팅 라우터
 *  "(.)i" : 폴더명 앞에 "(.)"가 붙으면 인터셉터 라우터를 쓴다는 의미입니다.
 *    괄호 안에 있는 "." 은 경로를 나타내며 "."은 현재 폴더, ".."은 부모 폴더를 뜻합니다.
 *    (이는 폴더 구조의 상대경로를 쓸 때와 비슷합니다.)
 *
 *    i는 가로챌 경로 폴더 명이 들어가게 됩니다.
 *    "i/flow/login"으로 경로로 이동 할 경우 "i"폴더 경로를 인터셉팅 (가로 채다)하여
 *    결과적으로 "(.)i/flow/login/page.tsx"으로 이동하게 됩니다.
 *
 *    Private Folder
 *    "_"folderName :
 *
 *  *주의
 *    클라이언트에서 라우팅 할 때만 인터셉트 라우팅이 적용됩니다.
 *    (예시 : Link로 href 주소로 이동 할 시에만 적용 )
 *    새로 고침 하거나 브라우저로 들어왔을 때에는 "i/flow/login"로 이동합니다.
 * */

export default function beforeLoginLayout({children,modal}: Props) {
  return(
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}