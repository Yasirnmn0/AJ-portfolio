"use client";
// app/components/AnimatedTitle.tsx
import { useState, useEffect } from "react";

const titles = ["Project Manager", "Product Manager", "Software Engineer"];
const delay = 2000; // Time to display each word

export default function AnimatedTitle() {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[index];
      let newText = fullText.substring(
        0,
        currentText.length + (isDeleting ? -1 : 1)
      );

      setCurrentText(newText);
      setTypingSpeed(isDeleting ? 75 : 150); // Faster deleting speed

      if (!isDeleting && newText === fullText) {
        // Pause at the end of the word
        setTypingSpeed(delay);
        setIsDeleting(true);
      } else if (isDeleting && newText === "") {
        // Start typing the next word
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, index, typingSpeed]);

  return (
    <span
      // 1. Font Size: Uses the fluid typography class defined in globals.css
      // 2. Font Weight: Updated to 'font-semibold' (600)
      className="text-white text-fluid-16 font-semibold sm:text-sm md:text-lg tracking-tight"
    >
      I'm a <span className="">{currentText}</span>.
      <span
        className="inline-block w-2 bg-white align-middle ml-1 animate-pulse"
        style={{ height: "1.2em" }}
      ></span>
    </span>
  );
}
