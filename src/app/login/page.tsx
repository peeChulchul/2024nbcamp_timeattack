import Input from "@/components/Input";
import React from "react";

export default function loginPage() {
  return (
    <div className="p-4 mx-auto max-w-[500px]">
      <form className="flex flex-col">
        <h1>로그인</h1>
        <Input placeholder="이메일 주소를 입력해주세요" label="이메일" />
        <Input placeholder="비밀번호를 입력해주세요" label="비밀번호" />
        <span>비밀번호를 찾으셨나요?</span>
        <button>로그인</button>
      </form>
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
