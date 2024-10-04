'use client';

import React from "react";
import CustomButton from "../forms/CustomButton";

const ConversationDetail = () => {
  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] py-6 px-6 bg-gray-200 rounded-xl">
          <p className="font-bold text-gray-500 mb-4">Abhijeet</p>
          <p>hyfdifsu ghiuhvity hg</p>
        </div>
        <div className="w-[80%] ml-[20%] py-6 px-6 bg-blue-200 rounded-xl">
          <p className="font-bold text-gray-500 mb-4">Sumit</p>
          <p>hyfdifsu ghiuhvity hg</p>
        </div>
      </div>
      <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-2 rounded-xl bg-gray-200"
        />
        <CustomButton
            label = "Send"
            onClick={() => console.log('Click')}
            className="w-[100px]"
        />
      </div>
    </>
  );
};

export default ConversationDetail;
