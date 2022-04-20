import React, { useState } from "react";
import axios from 'axios';

function NewCard () {
    const [id, setId] = useState(2)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [price, setPrice] = useState('')

    

    const onClick = () => {
        axios({
          method: 'post',
          url: 'http://localhost:3001/db',
          data: {
            id,
            title,
            content,
            price
          },
        });
        const nextTitle = title.concat({
            id,
            title,
            content,
            price  
        });
        setId(id + 1);
        title(nextTitle);
        setContent('')
        setPrice('')
      };
      const onChangeTitle = (e) => {
        setTitle(e.target.value)
      }
      const onChangeContent = (e) => {
        setContent(e.target.value)
      }
      const onChangePrice = (e) => {
        setPrice(e.target.value)
      }
    return (
        <div>
            <div>
                <input type='text' value={title} onChange={onChangeTitle} />
                <input type='text' value={content} onChange={onChangeContent} />
                <input type='text' value={price} onChange={onChangePrice} />

            <button className="btn btn-primary" type="sumbit" onClick={onClick}>상품 등록하기</button>
            </div>
        </div>
    );
}
export default NewCard