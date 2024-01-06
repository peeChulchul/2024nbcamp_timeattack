import React from "react";

export default function signupPage() {
  return (
    <form>
      <button>카카오</button>
      <button>구글</button>
      <button>Apple</button>
      <hr />
      <button>이메일주소로 시작하기</button>
      <span>
        이미 계정이 있으신가요? <strong>로그인</strong>
      </span>
    </form>
  );
}
