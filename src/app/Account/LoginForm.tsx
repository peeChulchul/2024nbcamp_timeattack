"use client";
import Input from "@/components/Input";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function LoginForm() {
  const methods = useForm({ mode: "onChange" });
  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <FormProvider {...methods}>
        <h1 className="text-lg font-bold text-center">로그인</h1>
        <form className="flex flex-col gap-1" onSubmit={methods.handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeholder="이메일 주소를 입력해주세요"
            label="이메일"
            pettern={/\S+@\S+\.\S+/}
            errorMessage="이메일형식으로 입력해주세요"
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            label="비밀번호"
            pettern={/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/}
            errorMessage="영문 숫자 조합 8자리 이상으로 입력해주세요"
          />
          {/* <span className="text-right text-sm font-semibold text-blue-950">비밀번호를 찾으셨나요?</span> */}
          <button>로그인</button>
        </form>
        <div className="text-center text-sm">
          텔레그램 회원이 아니신가요? <strong>회원가입</strong>
        </div>
      </FormProvider>
    </div>
  );
}
