"use client";
import Input from "@/components/Input";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function SignupForm() {
  const methods = useForm({ mode: "onChange" });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <FormProvider {...methods}>
        <h1 className="text-lg font-bold text-center">로그인</h1>
        <form className="flex flex-col gap-1" onSubmit={methods.handleSubmit(onSubmit)}>
          <Input
            placeholder="닉네임을 입력해주세요"
            label="닉네임"
            pettern={/^[a-zA-Z0-9가-힣]{2,10}$/}
            errorMessage="특수문제 제외 2~10자 내외로 작성해주세요"
          />
          <Input
            placeholder="이메일 주소를 입력해주세요"
            label="이메일"
            pettern={/\S+@\S+\.\S+/}
            errorMessage="이메일형식으로 입력해주세요"
          />
          <Input
            placeholder="비밀번호를 입력해주세요"
            label="비밀번호"
            pettern={/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/}
            errorMessage="영문 숫자 조합 8자리 이상으로 입력해주세요"
          />
          <Input placeholder="비밀번호를 다시 입력해주세요" label="비밀번호 확인" pettern={""} errorMessage="" />
          <button>회원가입</button>
        </form>
        <div className="text-center text-sm font-semibold text-blue-950">
          이미 계정이 있으신가요?<strong>로그인</strong>
        </div>
      </FormProvider>
    </div>
  );
}
