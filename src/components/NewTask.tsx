import {PlusCircle} from 'phosphor-react';
import styles from './NewTask.module.css';

export function NewTask() {
  return (
    <div className={styles.container}>

      <input 
        className={styles.newTask} 
        placeholder='Adicionar uma nova tarefa' 
        type="text" 
      />

      <button className={styles.button}>
        Criar <PlusCircle size={16}/> 
      </button>
    </div>
  )
}