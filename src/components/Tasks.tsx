import { useState, useEffect } from 'react';
import { Clipboard, Trash } from 'phosphor-react';
import styles from './Tasks.module.css';

import { taskTypes } from '../App';
import { Task } from './Task';

interface TasksProps {
  tasks: taskTypes[];
  handleDeleteTask: (id: string) => void;
  handleChangeisCompleted: (id: string) => void;
}

export function Tasks({tasks, handleDeleteTask, handleChangeisCompleted } : TasksProps) {
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    setCompletedCount(
      tasks.reduce((acc, current) => {
        if (current.isCompleted === true) {
          return acc + 1
        } else {
          return acc
        }
      }, 0)
    );
  }, [tasks])

  return (
    <section className={styles.container}>
      <header className={styles.header}>

        <div className={styles.created}>
          <strong>Tarefas criadas</strong><span>{tasks.length}</span>
        </div>

        <div className={styles.concluded}>
          <strong>Concluídas</strong>
            {
              (completedCount === 0) ? (
                <span>0</span>
              ) : (
                <span>
                  {completedCount} de {tasks.length}
                </span>
              )
            }
        </div>
      </header>

      {
        (tasks.length === 0) ? (
          <div className={`${styles.content} ${styles.empty}`}>
            <Clipboard size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        ) : (
          <div className={styles.content}>
            
            {
              tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    id={task.id} 
                    content={task.content} 
                    isCompleted= {task.isCompleted}
                    handleDeleteTask={handleDeleteTask}
                    handleChangeisCompleted={handleChangeisCompleted}
                  />
                )
              })
            }
          </div>
        )
      }
      
    </section>
  )
}