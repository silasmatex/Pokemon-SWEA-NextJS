"use client"

import Footer from "@/components/FooterComponent/Footer";
import Navbar from "@/components/NavbarComponent/Navbar";
import Link from "next/link";
import { useState } from "react";
import {FaRegHeart, FaHeart} from "react-icons/fa"

export default function Home() {

  const [counter, setCounter] = useState(0)
  const [textEntered, setTextEntered] = useState("")
  const [isClicked, setIsClicked] = useState(false)
  
  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter == 0? counter: counter - 1)
  }

  

  return (
    <>
      <Navbar/>
      <div className="bg-amber-600 h-screen flex flex-col items-center justify-center transition-all">

          <img src="/next.svg" alt="" width={300} className="mb-8"/>

          <FaHeart width={10} onClick={() => setIsClicked(!isClicked)} className="mb-7 cursor-pointer" value={false} color={isClicked ? "red" : "#fff"}/>



          <form>
            <input type="text" placeholder="Enter your message" value={textEntered} onChange={(e) => setTextEntered(e.target.value)} className="bg-white px-3 py-3 rounded-lg focus:outline-none"/>
          </form>

          <h1 className="text-5xl text-white font-bold pt-3">Text entered: {textEntered}</h1>

          <h1 className="text-9xl text-white font-bold">{counter}</h1>

          <div className="flex gap-5 mb-10">
            <button onClick={() => {increment()}} className="text-white cursor-pointer px-5 py-2 bg-green-400 border-none rounded-2xl font-bold hover:shadow-lg">
              + increment
            </button>
            <button onClick={() => {decrement()}} className="text-white cursor-pointer px-5 py-2 bg-red-600 border-none rounded-2xl font-bold hover:shadow-lg">
              - decrement
            </button>
          </div>

          <p className="mt-3">
            <Link href={"/contact"} className="bg-amber-400 px-5 py-2 border-none rounded-2xl">Click me</Link>
          </p>

        </div>
        <Footer/>
    </>
    
  );
}
