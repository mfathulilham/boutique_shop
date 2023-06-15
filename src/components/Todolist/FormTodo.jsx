import React, { useEffect, useState } from 'react'
import Button from './Button'
import Input from './Input';

function FormTodo({handleSubmit, editTodo}) {
  const [form, setForm] = useState({
    id: '',
    title: '',
    finish: false
  });

  useEffect(() => {
    if (editTodo) {
      setForm({...editTodo})
    }
  }, [editTodo])

  const handleChange = (e) => {
    setForm({...form, title: e.target.value});
  }

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    if(form.title) {
      let type = '';
      if (editTodo){
        type = 'update'; 
        handleSubmit( type, {...form})
      } else {
        type = 'add'; 
        handleSubmit(type, {...form, id: new Date().getUTCMilliseconds()})
      }
      setForm({...form, title: ''})
    }
  }

  return (
    <form className="form__todo" onSubmit={handleSubmitTodo}>
      <Input type="text" value={form.title} onChange={handleChange} className='form__input' placeholder='Add todo list' required/>
      <div className='form__btn-list'>
        <Button type="submit" className="form__btn">Add</Button>
      </div>
    </form>
  )
}

export default FormTodo
