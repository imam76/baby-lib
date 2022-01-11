import React, { useState } from 'react';
import styles from './todo.module.scss';

/* eslint-disable-next-line */
export interface TodoProps {
  prefix: string
}

export function Todo(props: TodoProps) {
  const arr = [
    {
      id: 1,
      name: ' Asep'
    },
    {
      id: 2,
      name: ' Imam'
    },
    {
      id: 3,
      name: ' Nawawi'
    }
  ]
  const [state, setstate] = useState(arr)
  const handleAddTodo = () => {
    const newTodo = [
      ...state, {
        id: state.length + 1,
        name: `User${props.prefix} ${state.length + 1}`
      }]
    setstate(newTodo)
  }
  return (
    <div className={styles['wrapper-todo-lib']}>
      <h1>Welcome to Todo!</h1>
      {
        state.map( item => <p>{item.id}. {item.name}</p>)
      }
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default Todo;
