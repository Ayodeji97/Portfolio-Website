import { leftVariants, TRANSITION } from "../../app.constants";
import FullStop from "./full-stop";
import { motion } from "framer-motion";

function SectionHeader({ text }: { text: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ ...TRANSITION, delay: 0.1 }}
      viewport={{ once: true }}
      variants={leftVariants}
      className="header"
    >
      {" "}
      <h1>{text}</h1> <FullStop />
    </motion.div>
  );
}

export default SectionHeader;
