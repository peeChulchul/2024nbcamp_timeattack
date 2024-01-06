"use client";

import { useAppSelector } from "@/redux/store";

export default function Home() {
  const test = useAppSelector((state) => state.accountModules);

  return <main>여기는 메인페이지</main>;
}
