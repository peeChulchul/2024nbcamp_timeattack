"use client";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import React, { useState } from "react";
import ModifyProfile from "./ModifyProfile";
import { clerAccount } from "@/redux/modules/accountModules";

export default function AccountPage() {
  const { avatar, nickname, userId } = useAppSelector((state) => state.accountModules);
  const [isModify, setIsModify] = useState<Boolean>(false);

  const dispatch = useAppDispatch();

  function logOut() {
    console.log("함수실행");
    dispatch(clerAccount(""));
  }
  if (userId === "") return null;

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {!isModify && (
        <>
          <Image
            className="rounded-full"
            src={`${avatar || "/user.png"} `}
            alt="user-profile"
            width={300}
            height={300}
          ></Image>
          {nickname}
          <div className="flex gap-4">
            <button onClick={() => setIsModify(true)} className="bg-blue-400 text-white rounded-md p-1">
              개인 정보수정
            </button>
            <button onClick={logOut} className="bg-red-400 text-white rounded-md p-1">
              로그아웃
            </button>
          </div>
        </>
      )}
      {isModify && <ModifyProfile setIsModify={setIsModify} />}
    </div>
  );
}
