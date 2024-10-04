'use client';
import React from "react";

import useSignupModel from "@/app/hooks/useSignupModel"
import Model from "./Model"
import CustomButton from "../forms/CustomButton";

const SignupModel = () => {
    const signupModel = useSignupModel()

    const content = (
        <>
        <form className="space-y-4">
            <input placeholder="Email" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl shadow-md" />
            <input placeholder="Password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl shadow-md" />
            <input placeholder="Repeat Password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl shadow-md" />
            <div className="p-5 bg-airbnb rounded-xl text-white text-center opacity-80">
                The Error message
            </div>
            <CustomButton
                label="Submit"
                onClick={() => console.log("Button")}
            />
        </form>
        </>
    )
  return (
    <Model
        isOpen={signupModel.isOpen}
        close={signupModel.close}
        label="signup"
        content={content}
    />
  )
}

export default SignupModel