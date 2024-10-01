import { useEffect, useState } from "react";
import "./toast.css"; // Make sure to create a CSS file for styling
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string;
  type: "success" | "error";
}

export default function Toast({ message, type }: ToastProps) {
  // Close the toast after 5 seconds
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`toast ${type}`}
        >
          <p>{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
