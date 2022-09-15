import { useState } from 'react';
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

import styles from './App.module.css';
import { Tasks } from './components/Tasks';

export interface taskTypes {
  id: string,
  content: string,
  isCompleted: boolean
}

function App() {

  const [tasks, setTasks] = useState<taskTypes[]>([]);

  function handleCreateTask(newTask: taskTypes) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(id: string) {
    setTasks(tasks.filter((task) => {
      return (task.id !== id)
    }));
  }

  function handleChangeisCompleted(id: string) {
    setTasks((state) => {
      return (
        state.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              isCompleted: !task.isCompleted
            };
          } else {
            return task;
          }
        })
      )
    });
  }

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <NewTask handleCreateTask={handleCreateTask} />
        <Tasks 
          tasks={tasks}
          handleDeleteTask={handleDeleteTask} 
          handleChangeisCompleted={handleChangeisCompleted}
        />
      </div>
    </>
  )
}

export default App
