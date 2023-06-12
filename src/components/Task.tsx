import { Trash } from 'phosphor-react';

// Imported styles this way so it work fine at vercel.
import styles from "../components/task.module.css"

interface taskProps {
  id: string,
  content: string,
  isCompleted: boolean,
  handleDeleteTask: (id: string) => void;
  handleChangeisCompleted: (id: string) => void;
}

export function Task({ id, isCompleted, content, handleDeleteTask, handleChangeisCompleted }: taskProps) {

  function onDeleteTask(id: string) {
    handleDeleteTask(id);
  }

  function onChangeisCompleted(id: string) {
    handleChangeisCompleted(id);
  }

  return (
    <div className={styles.task}>

      <input
        onClick={() => { onChangeisCompleted(id) }}
        defaultChecked={isCompleted}
        type="checkbox"
        id={id}
      />

      <label htmlFor={id}>{content}</label>

      <Trash onClick={() => { onDeleteTask(id) }} size={22} />

    </div>
  )
}