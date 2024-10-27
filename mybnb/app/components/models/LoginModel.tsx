"use client";
import React, { useState } from "react";

import useLoginModel from "@/app/hooks/useLoginModel";
import Model from "./Model";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const LoginModel = () => {
  const loginModel = useLoginModel();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);

  const submitLogin = async () => {
    const formData = {
      email: email,
      password: password,
    };
    const response = await apiService.postWithOut(
      "/api/auth/login/",
      JSON.stringify(formData)
    );
    console.log(errorMessage);

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);
      loginModel.close();
      router.push("/");
    } else {
      setErrorMessage(response.non_field_errors);
    }
  };

  const content = (
    <>
      <form action={submitLogin} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl shadow-md"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl shadow-md"
        />
        {(errorMessage).map((error, index) => (
          <div
            key={`error_${index}`}
            className="p-5 bg-airbnb rounded-xl text-white text-center opacity-80"
          >
            {error}
          </div>
        ))}
        <CustomButton label="Submit" onClick={submitLogin} />
      </form>
    </>
  );
  return (
    <Model
      isOpen={loginModel.isOpen}
      close={loginModel.close}
      label="Log in"
      content={content}
    />
  );
};

export default LoginModel;
