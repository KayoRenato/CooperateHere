import styles from './Header.module.css'
import logo from '../assets/logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo comment here" />
            <h1>Cooperate Here</h1>
        </header>
    );
}