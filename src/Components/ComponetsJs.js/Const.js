const onkeyUp = (e) => {
  if (e.keyCode === 13) {
    /*  만약 13(엔터)을 누르면 */
    /*  여기에 실행시킬 동작 */
  }
};

const [names, setNames] = useState([]); /* [] <= 는 배열 */

const [likes, setLikes] = useState(0); /* <= likes의 숫자 0 부터 시작 */

const likeUp = () => {
  setLike(like + 1);
}; /* <= like의 숫자 1씩 더하기 {likeUp} 을 써줘야 실행 된다 */

let [modal, setModal] = useState(false);
{
  modal === true ? <Modal /> : null;
} /* <= if 문 */
