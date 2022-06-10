import React, { useState } from "react";
import "./form.css";

function Form() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = [...items];

    if (text.length === 0) {
      return;
    }

    let checkedText = text.replace(/viagra|xxx/gi, "***");
    newItem.unshift(checkedText);
    setItems(newItem);
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Оставьте комментарий:</p>
        <textarea
          rows='10'
          cols='45'
          name='comment'
          value={text}
          onChange={handleChange}></textarea>
        <br />
        <button type='submit'>Отправить</button>
      </form>
      <br />
      <h2>Отзывы</h2>
      {items.map((item, index) => (
        <p className={index === 0 ? "newComment" : ""}>{item}</p>
      ))}
    </div>
  );
}

export default Form;
