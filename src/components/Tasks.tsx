import { Clipboard, Trash } from 'phosphor-react';
import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>

        <div className={styles.created}>
          <strong>Tarefas criadas</strong><span>0</span>
        </div>

        <div className={styles.concluded}>
          <strong>Concluídas</strong><span>0</span>
        </div>
      </header>


      {/* <div className={`${styles.content} ${styles.empty}`}>
        <Clipboard size={56} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div> */}


      <div className={styles.content}>
        
        <div className={styles.task}>
          <input type="checkbox" id='task'/>
          <label htmlFor='task'>Lorem .</label>
          <Trash size={22}/>
        </div>

        <div className={`${styles.task} ${styles.done}`}>
          <input type="checkbox" id='task1'/>
          <label htmlFor='task1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sunt, amet laborum suscipit facilis nam earum quaerat rem laboriosam nulla! Minus corporis tempore reprehenderit optio eligendi a, possimus quod nulla.</label>
          <Trash size={22}/>
        </div>

      </div>

    </section>
  )
}