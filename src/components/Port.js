import React, { useEffect, useRef } from "react";
import Image from "next/image";

import { portText } from "@/constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {
  const horizontalRef = useRef(null);
  const sectionRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -120 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top 56px",
        end: () => "+=" + horizontal.offsetWidth,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <section id="port" ref={horizontalRef}>
      <div class="port__inner">
        <h2 class="port__title">
          portfolio <em>포폴 작업물</em>
        </h2>
        <div class="port__wrap">
          {portText.map((port, key) => (
            <article class={`port__item p${key + 1}`} key={key} ref={(el) => (sectionRef.current[key] = el)}>
              <span class="num">{port.num}.</span>
              <a href={port.code} target="_blank" class="img" rel="noreferrer">
                <Image src={port.img} alt={port.name} width={420} height={191} />
              </a>
              <h3 class="title">{port.title}</h3>
              <p class="desc">{port.desc}</p>
              <a href={port.view} target="_blank" class="site" rel="noreferrer">
                사이트 보기
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port;
