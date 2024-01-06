"use client";
import Input from "@/components/Input";
import { useAppSelector } from "@/redux/store";
import { loginAccount } from "@/service/account";
import Link from "next/link";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export default function LoginForm() {
  const methods = useForm({ mode: "onChange" });

  const onSubmit = async (data: any) => {
    const { 이메일: id, 비밀번호: password } = data;
    const body = { id, password };
    const response = await loginAccount(body);

    console.log(response);
  };
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
          <button>로그인</button>
        </form>
        <div className="text-center text-sm">
          회원이 아니신가요?
          <Link href={"Account/signup"} className="font-semibold">
            회원가입
          </Link>
        </div>
      </FormProvider>
    </div>
  );
}
