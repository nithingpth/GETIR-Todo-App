import React from 'react';

function TodoList(props) {
  return props.list.map((item) => {
    return (
      <div className={(item.status ? 'done' : 'pending') + ' item'}>
        <input
          className="todoChk"
          type="checkbox"
          onChange={(e) =>
            props.editItem({ ...item, status: e.target.checked })
          }
          checked={item.status}
        />
        <span
          className="todoItem"
          contenteditable="true"
          onBlur={(e) =>
            props.editItem({ ...item, name: e.target.textContent })
          }
        >
          {item.name}
        </span>
        <span className="spnDel" onClick={(e) => props.deleteItem(item)}>
          <i className="fa fa-trash-o" />
        </span>
      </div>
    );
  });
}
export default TodoList;
