"use client";
import React, { useState } from "react";

import useSignupModel from "@/app/hooks/useSignupModel";
import Model from "./Model";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";

const SignupModel = () => {
  const router = useRouter();
  const signupModel = useSignupModel();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const submitSignUp = async () => {
    const formData = {
      email: email,
      password1: password,
      password2: repeatPassword,
    };
    const response = await apiService.post("/api/auth/register/", JSON.stringify(formData));
    if(response.access){
      // handle login
      signupModel.close()
      router.push('/')
    }
    else{
      const tempError : string[] = Object.values(response).map((error : any) => {
        return error;
      })
      setErrorMessage(tempError);
    }
  };

  const content = (
    <>
      <form action={submitSignUp} className="space-y-4">
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
        <input
          onChange={(e) => setRepeatPassword(e.target.value)}
          placeholder="Repeat Password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl shadow-md"
        />
        {errorMessage.map((error, index) => {
          return (
            <div
              key={`error_${index}`}
              className="p-5 bg-airbnb rounded-xl text-white text-center opacity-80"
            >
              {error}
            </div>
          );
        })}
        <CustomButton label="Submit" onClick={submitSignUp} />
      </form>
    </>
  );
  return (
    <Model
      isOpen={signupModel.isOpen}
      close={signupModel.close}
      label="signup"
      content={content}
    />
  );
};

export default SignupModel;
