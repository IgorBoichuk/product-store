import { useState } from "react";

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const open = () => {
    setIsOpen(true), console.log(isOpen);
  };
  const close = () => {
    setIsOpen(false), console.log(isOpen);
  };

  const toggle = () => setIsOpen((isOpen) => !isOpen);

  return { isOpen, open, close, toggle };
};
