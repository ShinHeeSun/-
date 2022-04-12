import React, { useState } from 'react';

function LikeButton() {
  let [like, setLike] = useState(0);

  const likeClike = () => {
    setLike(like + 1);
  };

  return (
    <>
      <span className='likeButton' onClick={likeClike}>👍{like}</span>{' '}
    </>
  );
}
export default LikeButton;
