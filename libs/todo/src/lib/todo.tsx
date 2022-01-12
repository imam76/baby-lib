import React, { useState } from 'react';
import { Divider, Checkbox, Row, Col } from 'antd';
import styles from './todo.module.scss';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import 'antd/dist/antd.css';

/* eslint-disable-next-line */
export interface TodoProps {
  prefix: string
}

export function Todo(props: TodoProps) {
  const arr = [
    {
      id: 1,
      name: ' Asep',
      value: true,
      label: `User Books 1`
    },
    {
      id: 2,
      name: ' Imam',
      value: false,
      label: `User Books 2`
    },
    {
      id: 3,
      name: ' Nawawi',
      value: false,
      label: `User Books 3`
    }
  ]
  const [state, setstate] = useState(arr);
  const [checkAll, setCheckAll] = React.useState(false);
  const [indeterminate, setIndeterminate] = React.useState(arr.filter(item => item.value === true).length >= 1);

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    const allListActive = state.map(item => ({
      ...item,
      value: !checkAll
    }));

    setstate(allListActive);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const onChangeList = (id: number) => (e: CheckboxChangeEvent) => {
    const newArr = state.map(item => ({
      ...item,
      value: item.id === id ? !item.value : item.value
    }));
    console.log("INI PA CHECK LIST =>", newArr.filter(item => item.value === true).length === newArr.length);
    setstate(newArr);
    setIndeterminate(newArr.filter(item => item.value === true).length < newArr.length && newArr.filter(item => item.value === true).length > 0 );
    setCheckAll(newArr.filter(item => item.value === true).length === newArr.length);

  }

  const handleAddTodo = () => {
    const newTodo = [
      ...state, {
        id: state.length + 1,
        name: `User ${props.prefix} ${state.length + 1}`,
        value: false,
        label: `User Books ${state.length + 1}`
      }]
    setstate(newTodo);
  }

  return (
    <div className={styles['wrapper-todo-lib']}>
      <h1>Welcome to Todo!</h1>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <Divider />
      <Row>
        {
          state.map((item, index) => <Col key={`${item} ${index}`} span={24}><Checkbox onChange={onChangeList(item.id)} checked={item.value}>{item.id}. {item.name}</Checkbox></Col>)
        }
      </Row>
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default Todo;
