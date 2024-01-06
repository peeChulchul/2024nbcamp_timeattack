import React from "react";

export default function loginPage() {
  return (
    <div>
      <form>
        <input></input>
        <input></input>
        <span>비밀번호를 찾으셨나요?</span>
        <button>로그인</button>
      </form>
      <hr />
      <button>카카오</button>
      <button>구글</button>
      <button>Apple</button>

      <span>
        텔레그램 회원이 아니신가요? <strong>회원가입</strong>
      </span>
    </div>
  );
}
