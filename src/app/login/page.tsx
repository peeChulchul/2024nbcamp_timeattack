import React from "react";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="p-4 mx-auto max-w-[500px]">
      <LoginForm />
      <hr />
      <div className="flex flex-col">
        <button>카카오</button>
        <button>구글</button>
        <button>Apple</button>
        <span>
          텔레그램 회원이 아니신가요? <strong>회원가입</strong>
        </span>
      </div>
    </div>
  );
}
