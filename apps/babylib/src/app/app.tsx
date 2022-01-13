import React, { useState } from 'react';
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { InputText } from '@cosmic/InputText'

export function App() {
  return (
    <>
      <NxWelcome title="babylib" />
      <div className={styles['todoWrapper']}>
        <InputText label='Tested' />
      </div>
    </>
  );
}

export default App;
