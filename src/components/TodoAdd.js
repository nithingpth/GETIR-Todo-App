import React from 'react';

function TodoAdd(props) {
  return (
    <div>
      <input id="inputText" placeholder="Add your new todo" />
      <button
        id="addBtn"
        onClick={(e) => {
          props.addItem({
            id: Date.now(),
            name: document.getElementById('inputText').value,
            status: false,
          });
          document.getElementById('inputText').value = '';
        }}
      >
        <i className="fa fa-plus" />
      </button>
    </div>
  );
}
export default TodoAdd;
