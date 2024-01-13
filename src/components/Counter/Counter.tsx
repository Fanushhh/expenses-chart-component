import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface CounterProps {
  from: number;
  to: number;
  children:any,
  styles?: string;
}

const Counter: React.FC<CounterProps> = ({ from, to, children, styles }) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1,
      delay:1.2,
      
      onUpdate(value) {
        if (node) {
          node.textContent = value.toFixed(2);
          
        }
      },
    });

    return () => controls.stop();
  }, [from, to]);

  if(children === "$"){
    return(
        <div className={styles}>
        <span>{children}</span>
        <span ref={nodeRef}></span>
    </div>
    )
  }
  return (
    <div className={styles} >
        <span ref={nodeRef}></span>
        <span>{children}</span>
    </div>
  )
};

export default Counter;