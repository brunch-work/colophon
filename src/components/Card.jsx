"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Lockup from "./Lockup";
import Time from "./Time";

gsap.registerPlugin(useGSAP);

export default function Card() {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const endRotation = gsap.utils.random(-5, 5);
        const startRotation = gsap.utils.random(12, 20) * (endRotation < 0 ? -1 : 1);

        gsap.fromTo(
          cardRef.current,
          { y: () => window.innerHeight, rotation: startRotation },
          {
            y: 0,
            rotation: endRotation,
            ease: "expo.out",
            duration: 1.4,
          }
        );
      });
    },
    { scope: cardRef }
  );

  return (
    <div className="card" ref={cardRef}>
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
