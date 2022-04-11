import React, {useState} from "react";
import '../App.css'
import Modal from './Modal';




function BlogList () {
    

    const [titleList, setTitleList] = useState( [
        {id: 1, title : '남자 코트 추천', text : '2월 17일'},
        {id: 2, title : '강남 코트 추천', text : '2월 20일'},
        {id: 3, title : '게이 코트 추천', text : '2월 30일'},
      ])
      const [inputText, setInputText] = useState('');
      const [inputText1, setInputText1] = useState('');
      const [nextId, setNextIde] = useState(4);
      
  const onChange = (e) => setInputText(e.target.value);
  const onChange1 = (e) => setInputText1(e.target.value);


      
const onKeyUP = (e) => {
 if (e.key === 'Enter') {
  onClick ();
 }
}
const onClick = () => {
  const nextNames = titleList.concat({
    id: nextId,
    title: inputText,
    text : inputText1
  });
  setNextIde(nextId + 1);
  setTitleList(nextNames);
  setInputText('');
  setInputText1('');

};


      
      const [only, setOnly] = useState(0); 

      

      let [like, setLike] = useState(0);
      const likeClike = () => {
        setLike(like + 1);
      };

     
      let [modal, setModal] = useState(false);
      const openModal = () => {
        if (modal === false) {
          return setModal(true);
        } else if (modal === true) {
          return setModal(false);
        }
      };
 

      const nameList = titleList.map((e, i) =>
      
      (<div className="list"  key={i}>
          <h4 onClick={()=>{setOnly(i); openModal() }}> 
          {e.title} <span onClick={likeClike}> &nbsp;👍{like} <br /></span> {e.text} </h4>
      
      <hr />
      </div>
      ))  
    return(
        <div >
          {nameList}
         

            {modal === true ? <Modal titleList={titleList} 
            only={only}
            /> : null}
             <input value={inputText} onChange={onChange} />
             <input value={inputText1} onChange={onChange1} onKeyUp={onKeyUP} />

      <button onClick={onClick} >추가</button>
            </div>
    );
}
export default BlogList;