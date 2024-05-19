
"use client"
import React from 'react'
import { useRef } from "react";

export default function page() {
    const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <div className={"p-8"}>
         <h1 className={"text-2xl p-4"}>UseRef Hook</h1>
      <p>The useRef hook allows you to directly create a reference to the DOM element in the functional component.</p>
      <input type="text" placeholder="enter text here" ref={inputElement} /> <br/>
      <button onClick={focusInput} class="bg-blue-500 m-8 hover:bg-blue-700 text-white  py-2 px-4 rounded-full">Focus Input</button>
    </div>
  )
}
