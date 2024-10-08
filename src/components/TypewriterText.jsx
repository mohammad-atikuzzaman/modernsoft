"use client"
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypewriterText = ({words}) => {
   const [text] = useTypewriter({
     words: [`${words}`],
     loop: 0,
   });
  return (
    <h1 className="text-3xl font-semibold ml-4">
      Welcome to <span className="text-blue-600">{text}</span>
    </h1>
  );
};

export default TypewriterText;
