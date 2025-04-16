import { useEffect, useState } from "react";

function TypingEffect({ text }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  console.log("Index and Interval..."),
    useEffect(() => {
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);

        setIndex((prev) => {
          if (prev < text.length - 1) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 200);

      return () => clearInterval(interval);
    }, [index, text]);

  return <h1>{displayedText}</h1>;
}

export default TypingEffect;
