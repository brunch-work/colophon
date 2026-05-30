"use client";

import { useEffect } from "react";
import { useAnimate, useReducedMotion } from "motion/react";

import Lockup from "./Lockup";
import Time from "./Time";

const rand = (min, max) => Math.random() * (max - min) + min;
// GSAP's expo.out, exactly: 1 - 2^(-10x)
const expoOut = (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));

export default function Card() {
  const [scope, animate] = useAnimate();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const end = rand(-5, 5);
    const start = rand(12, 20) * (end < 0 ? -1 : 1);
    const y = window.innerHeight + scope.current.offsetHeight;

    animate(
      scope.current,
      { y: [y, 0], rotate: [start, end] },
      { duration: 1.4, ease: expoOut }
    );
  }, [reduceMotion]);

  return (
    <div className="card" ref={scope}>
      <Lockup />
      <div className="card__links">
        <a href="mailto:contact@colophon.online">contact@colophon.online</a>
        <div className="card__row">
          <a href="tel:+15144029382">(+1) 514-402-9382</a>
          <Time />
        </div>
      </div>
    </div>
  );
}
