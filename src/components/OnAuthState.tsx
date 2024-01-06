"use client";
import { setAccount } from "@/redux/modules/accountModules";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getAccount } from "@/service/account";
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function OnAuthState({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const { isLogin } = useAppSelector((state) => state.accountModules);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLogin) return;
    const token = sessionStorage.getItem("account");

    (async () => {
      if (token) {
        try {
          const accountData = await getAccount(token);
          console.log(accountData.success);
          dispatch(setAccount({ ...accountData, accessToken: token }));
          router.push("/Account");
        } catch (error) {
          sessionStorage.removeItem("acocunt");
          router.push("/Account/login");
        }
      }
    })();

    console.log("마운트");
    console.log(token);
  }, [dispatch, isLogin, router]);

  return <>{children}</>;
}
