"use client";
import Input from "@/components/Input";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function LoginForm() {
  const methods = useForm();

  console.log(methods);
  return (
    <div>
      <FormProvider {...methods}>
        <form className="flex flex-col">
          <h1>로그인</h1>
          <Input placeholder="이메일 주소를 입력해주세요" label="이메일" />
          <Input placeholder="비밀번호를 입력해주세요" label="비밀번호" />
          <span>비밀번호를 찾으셨나요?</span>
          <button>로그인</button>
        </form>
      </FormProvider>
    </div>
  );
}
