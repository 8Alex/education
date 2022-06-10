import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleValidation = () => {
    let isValid = true;

    if (input === "") {
      isValid = false;
      setError("Заполните поле");
    } else {
      setError("");
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      alert("Форма заполнена верно");
    } else {
      alert("Форма заполнена неверно");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for='name'>Имя:</label>
      <input type='text' name='name' value={input} onChange={handleChange} />
      <button type='submit'>Нажми меня</button>
      <div style={{ color: "red" }}>{error}</div>
    </form>
  );
}

export default Form;
