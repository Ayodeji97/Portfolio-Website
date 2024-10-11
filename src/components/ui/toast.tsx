import { motion } from "framer-motion";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "";
}

export default function Toast({ message, type }: ToastProps) {
  // const [showToast, setShowToast] = useState(message ? true : false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowToast(false);
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [message]);

  return (
    message && (
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, type: "spring" },
        }}
        exit={{
          opacity: 0,
          x: 30,
          transition: { duration: 0.5, type: "spring" },
        }}
        className={`toast `}
      >
        <div className="toast-bar"></div>
        <motion.span
          initial={{ opacity: 0, y: -25 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, type: "spring", delay: 0.5 },
          }}
          className={`toast-icon ${type}`}
        >
          {" "}
          {type === "success" ? <BiCheckCircle /> : <BiErrorCircle />}{" "}
        </motion.span>
        <p>{message}</p>
      </motion.div>
    )
  );
}
