// loading dependencies
"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image'
import divider from "./pattern-divider-desktop.svg"
import dice from "./icon-dice.svg"
import dividerAlt from "./divederAlt.svg"
import moon from "./moon.svg"
import sun from "./sun.svg"

export default function Home() {
  // settings states
  const [content, setContent] = useState('')
  const [id, setId] = useState('')
  const [state, setState] = useState(false)
  const [mainClass, setMainClass] = useState('')
  const [pClass, setPClass] = useState('')
  const [diviClass, setDiviClass] = useState('')
  const [divi2Class, setDivi2Class] = useState('invi')
  const [pictureSRC, setPictureSRC] = useState(moon)
  const [btn, setBtn] = useState("circle")
  // calling api
  async function logAdvice() {
    const url = 'https://api.adviceslip.com/advice' + '?nocache=' + new Date().getTime();
    const res = await fetch(url)
    const advice = await res.json()
    setContent(String(advice['slip']['advice']))
    setId(String(advice['slip']['id']))
  }
  useEffect(() => {
    logAdvice()
  },[])

  // dark and light mode
  useEffect(() => {
    if(state == true){
      document.body.classList.add("dark")
    }
    else if(state == false){
      document.body.classList.remove("dark")
    }
  }, [state])

  const onClick2 = () => {
    if(state == false){
      setMainClass("main")
      setPClass("p")
      setDiviClass("invi")
      setDivi2Class("")
      setBtn("circleD")
      setPictureSRC(sun)
      setState(true)
    }
    if(state == true){
      setMainClass("")
      setPClass("")
      setDiviClass("")
      setDivi2Class("invi")
      setBtn("circle")
      setPictureSRC(moon)
      setState(false)
    }
  }

  return (
    // html content
    <main>
      <button className="btn" id="btn" onClick={onClick2}>
        <div className={btn} id="btnD">
          <Image src={pictureSRC} height={30} width={30} alt=""/>
        </div>
      </button>
      <section className={mainClass} id="main">
        <p className={pClass} id="p">
        ADVICE #{id}
        </p>
        <p id="p2" className={pClass}>
          &ldquo;{content}&rdquo;
        </p>
        <div className={state == false ? diviClass : divi2Class} id="divi">
            <Image src={state == false ? divider : dividerAlt} alt="" width="630"/>
        </div>
        <button onClick={logAdvice}>
          <div>
            <Image src={dice} alt='' width={30}/>
          </div>
        </button>
      </section>
    </main>
  )
}
