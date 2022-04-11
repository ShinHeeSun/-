import React, { useState } from 'react';

function LikeButton() {
  let [like, setLike] = useState(0);

  const likeClike = () => {
    setLike(like + 1);
  };


  return (
    <div>
      <h4>
        <span onClick={likeClike}>👍{like}</span>{' '}
      </h4>
    </div>
  );
}
export default LikeButton;
