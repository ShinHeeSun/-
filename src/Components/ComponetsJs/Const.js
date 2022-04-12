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


const ifTest = () => {
  if (무엇과 === 무엇) /* <= 일치하면 */ {
    /* 이것을 실행해라 */
  }
}

const titleList = [a, b, c]
const nameList = titleList.map((e) =>
(<h4 key={e.id}>{e.title} {e.day} </h4>)) /* 넣고싶은 곳에다가 nameList   <= 반복문 */

const onClick = () => {
  axios({
      method: 'post',
      url: 'http://localhost:3001/user',
      data: {
        id,
        nick,
        password
      }
    });
  }     /* <= db에 전송 data 안에 있는것은 state 와 인풋에 있는 value 랑 같게 하는게 좋음 */