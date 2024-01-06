"use client";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";

export default function AccountPage() {
  const { avatar, nickname, userId } = useAppSelector((state) => state.accountModules);
  return <div>{nickname}의 페이지</div>;
}
