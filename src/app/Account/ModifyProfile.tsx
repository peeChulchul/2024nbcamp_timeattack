"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";

export default function ModifyProfile({ setIsModify }: { setIsModify: Dispatch<SetStateAction<Boolean>> }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  const { avatar, nickname } = useAppSelector((state) => state.accountModules);

  return (
    <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Image className="rounded-full" src={`${avatar || "/user.png"} `} alt="user-profile" width={300} height={300} />

      <input defaultValue={nickname} {...register("nickname")}></input>
      <div className="flex  gap-4">
        <button className="bg-blue-400 text-white rounded-md p-1">개인 정보수정</button>
        <button onClick={() => setIsModify(false)} type="button" className="bg-red-400 text-white rounded-md p-1">
          취소
        </button>
      </div>
    </form>
  );
}
