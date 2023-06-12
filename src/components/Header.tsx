// Imported styles this way so it work fine at vercel.
import styles from '../components/Header.module.css';
import naveImg from '../assets/nave.svg';
export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={naveImg} alt="Nave Logo" />
        <h1 className={styles.title}>to<span>do</span></h1>
      </div>
    </header>
  )
}