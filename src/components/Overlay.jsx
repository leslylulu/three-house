import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-slate-100/85 rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-sans text-2xl">
            👋 Hello, I'm Lulu
          </h1>
          <p className="text-gray-500">Welcome to my beautiful portfolio</p>
          <p className="mt-3">I know:</p>
          <ul className="leading-9">
            <li>🧑‍💻 How to code</li>
            <li>🧑‍🏫 How to learn</li>
          </ul>
          <p className="animate-bounce  mt-6 text-center text-slate-500 text-lg">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-sans font-bold text-2xl">
            Here are my skillsets 🔥
          </h1>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9 text-right">
            <li>ReactJS</li>
            <li>VueJS</li>
            <li>Tailwind</li>
          </ul>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9 text-right">
            <li>NodeJS</li>
            <li>MongoDB</li>
          </ul>
          <p className="animate-bounce text-slate-500 text-lg mt-6 text-center">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-bold font-sans text-2xl">
            🤙 Want to contact me?
          </h1>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            💌 <span>dearlulu1995@gmail.com</span>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};