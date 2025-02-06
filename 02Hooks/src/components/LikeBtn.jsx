import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const LikeBtn = () => {
  let [like, setLike] = useState(0);

  function toggleLike() {
    setLike((prve) => (prve === 0 ? 1 : 0));
  }

  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <button onClick={toggleLike}>
        {like === 0 ?  <FaRegHeart size={50} color="white"/> : <FaHeart size={50} color="red" />}
      </button>
      <p>{like === 0 ? "Give a Like!" : "Thanks for liking!"}</p>
    </div>
  );
};

export default LikeBtn;
