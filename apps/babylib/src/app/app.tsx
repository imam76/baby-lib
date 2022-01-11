import React, { useState } from 'react';
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Todo } from 'todo-lib';

export function App() {
  return (
    <>
      <NxWelcome title="babylib" />
      <div className={styles['todoWrapper']}>
        <Todo prefix='Books' />
      </div>
    </>
  );
}

export default App;
