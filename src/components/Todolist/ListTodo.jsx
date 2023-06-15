import React from 'react';
import Todo from './Todo';

function ListTodo({todos, handleDelete, handleCheck, handleEdit}) {
  return (
    <>
      { todos.map((todo) => (
        <div className='todo__item' key={todo.id}>
          <Todo
            id={todo.id}
            title={todo.title}
            finish={todo.finish}
            handleDelete={() => handleDelete(todo.id)}
            handleCheck={() => handleCheck(todo.id)}
            handleEdit={() => handleEdit(todo.id)}
          />
        </div>
      ))}
    </>
  )
}

export default ListTodo