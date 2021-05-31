import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <form className='form'>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...todo"
      />
      <button className='add' onClick={props.handleAddTodo}>Add Todo</button>
      <button className='clear' onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;