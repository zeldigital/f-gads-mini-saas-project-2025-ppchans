import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
  className = ''
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && currentText === currentFullText) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-blue-600 font-normal">|</span>
    </span>
  );
};

export default TypewriterText;