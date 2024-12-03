import { motion } from "framer-motion";
import { useState } from "react";

const InfosCard = ({ cardHeading, imageUrl, buttonUrl }) => {
  const [showBtn, setShowBtn] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowBtn(!showBtn)}
      onMouseLeave={() => setShowBtn(!showBtn)}
      className="infos-card"
    >
      <p>{cardHeading}</p>
      <img src={imageUrl} alt="protestants image" />

      {showBtn && (
        <motion.div
          initial={{ opacity: 0, width: 0, height: 0 }}
          animate={{ opacity: 1, width: "100%", height: "100%" }}
          className="showMore"
        >
          <motion.a
          href={buttonUrl}
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            className="showMoreBtn"
          >
            იხილეთ მეტი
          </motion.a>
        </motion.div>
      )}
    </div>
  );
};

export default InfosCard;
