import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

import styles from './App.module.css';
import { Tasks } from './components/Tasks';

function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <NewTask/>
        <Tasks/>
      </div>
    </>
  )
}

export default App
