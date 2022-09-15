import {PlusCircle} from 'phosphor-react';
import styles from './NewTask.module.css';
import { useState, FormEvent } from 'react';

import { v4 as uuidv4 } from 'uuid';

import {taskTypes} from '../App';

interface NewTaskProps {
  handleCreateTask: (task: taskTypes) => void
}

export function NewTask({handleCreateTask}: NewTaskProps) {

  const [newTask, setNewTask] = useState("");

  function onCreateNewTask(event: FormEvent) {
    handleCreateTask({
      id: uuidv4(),
      content: newTask,
      isCompleted: false
    });

    setNewTask("");
  }

  return (
    <form className={styles.container}>

      <input
        onChange={(e) => {setNewTask(e.target.value)}}
        value = {newTask}
        className={styles.newTask} 
        placeholder='Adicionar uma nova tarefa' 
        type="text"
      />

      <button 
        disabled={newTask === ""} 
        className={styles.button} 
        onClick={onCreateNewTask}>
        Criar <PlusCircle size={16}
      /> 
      </button>
    </form>
  )
}