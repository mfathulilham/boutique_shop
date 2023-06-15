import React from 'react';
import Button from './Button';
import Input from './Input';

function Todo({id, title, finish, handleDelete, handleEdit, handleCheck}) {
  return (
    <>
    {finish}
      <div className='todo__content'>
        <Input className="todo__input" defaultChecked={finish} onClick={() => handleCheck(id)} type="checkbox"/>
        <p className={`todo__title ${finish ? 'is-done' : ''}`}>{title}</p>
      </div>
      <div className='todo__action'>
        { (finish === false) &&
          <Button 
            type="button"
            className="todo__btn"
            onClick={() => handleEdit(id)}
          >
            <img className="todo__icon" src="assets/edit.svg" alt="icon-edit"/>
          </Button>
        }
        <Button 
          type="button"
          className="todo__btn" 
          onClick={() => handleDelete(id)}
        >
          <img className="todo__icon" src="assets/delete.svg" alt="icon-delete"/>
        </Button>
      </div>
    </>
  )
}

export default Todo