import { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I'm Badhon",
    "Welcome to My Portfolio",
    "Thanks for visit",
  ];
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150); // Typing speed in ms

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = texts[index];

      if (!isDeleting) {
        // Typing effect
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        setTypingSpeed(150); // Normal speed while typing
      } else {
        // Deleting effect
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setTypingSpeed(50); // Faster while deleting
      }

      // If word is completely typed, wait before deleting
      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      }

      // If word is completely deleted, move to next text
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, index, typingSpeed, texts]);

  return (
    <div className=" transition ease-in-out duration-300">
      {currentText}
      <span className="animate-blink">|</span> {/* Blinking cursor */}
    </div>
  );    
};

export default TextChange;