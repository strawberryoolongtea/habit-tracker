import React, { memo } from "react";

const AddHabit = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  console.log("addHabit");

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Enter your habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default AddHabit;
