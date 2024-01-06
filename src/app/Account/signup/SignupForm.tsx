"use client";
import Input from "@/components/Input";
import { createAccount } from "@/service/account";
import Link from "next/link";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function SignupForm() {
  const methods = useForm({ mode: "onChange" });
  const onSubmit = async (data: any) => {
    const { 닉네임: nickname, 이메일: id, 비밀번호: password, ...rest } = data;
    const body = { id, password, nickname };
    const response = await createAccount(body);

    console.log(response);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <h1 className="text-lg font-bold text-center">로그인</h1>
        <form className="flex flex-col gap-1" onSubmit={methods.handleSubmit(onSubmit)}>
          <Input
            type="string"
            placeholder="닉네임을 입력해주세요"
            label="닉네임"
            pettern={/^[a-zA-Z0-9가-힣]{2,10}$/}
            errorMessage="특수문제 제외 2~10자 내외로 작성해주세요"
          />
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
          <Input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            label="비밀번호 확인"
            pettern={""}
            errorMessage=""
          />
          <button>회원가입</button>
        </form>
        <div className="text-center text-sm ">
          이미 계정이 있으신가요?
          <Link className="font-semibold  text-blue-950" href={"./"}>
            로그인
          </Link>
        </div>
      </FormProvider>
    </div>
  );
}
