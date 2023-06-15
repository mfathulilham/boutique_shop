import { useEffect, useState } from 'react';
import './Todolist.scss';
import FormTodo from '../../components/Todolist/FormTodo';
import ListTodo from '../../components/Todolist/ListTodo';

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [finishTodo, setFinishTodo] = useState([]);
  const [unfinishTodo, setUnfinishTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    if (todos) {
      setFinishTodo(todos.filter(todo => todo.finish === true));
      setUnfinishTodo(todos.filter(todo => todo.finish === false));
    }
  }, [todos])

  const handleSubmitTodo = (type, data) => {
    if (type === 'add') {
      setTodos([data, ...todos]);
    } else {
      let index = todos.findIndex((todo => todo.id === data.id));
      todos[index].title = data.title;
      setEditTodo(null)
    }
  }
  
  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos);
  }

  const handleCheckTodo = (id) => {
    const updateTask = todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, finish: !todo.finish
          };
        }
        return todo;
      });
    setTodos(updateTask);
  }

  const handleEditTodo = (id) => {
    const newTodo = todos.find(todo => todo.id === id)
    setEditTodo(newTodo);
  }

  return (
    <div className="todo">
      <header className='todo__header'>
        <h1>Todo List</h1>
        <FormTodo 
          handleSubmit={handleSubmitTodo}
          editTodo={editTodo}
        />
      </header>
      <div className='todo__list'>
        <p className="todo__l-title">Need to do 
          <span>{` ( ${unfinishTodo.length} Remaining)`}</span>
        </p>
        <ListTodo
          todos={unfinishTodo}
          handleDelete={handleDeleteTodo}
          handleCheck={handleCheckTodo}
          handleEdit={handleEditTodo}
          />
      </div>
      <div className='todo__list'>
        <p className="todo__l-title">Completed 
          <span>{` ( ${finishTodo.length} Task)`}</span>
        </p>
        <ListTodo
          todos={finishTodo}
          handleDelete={handleDeleteTodo}
          handleCheck={handleCheckTodo}
          handleEdit={handleEditTodo}
          />
      </div>
    </div>
  );
}

export default Todolist;
