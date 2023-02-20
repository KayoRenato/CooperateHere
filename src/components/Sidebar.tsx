import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.cover}>
                <img className={styles.cover}
                    src="https://images.unsplash.com/photo-1676458482060-744386b5c273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className={styles.profile}>
                <Avatar url='https://github.com/KayoRenato.png' hasBorder/>
                <strong>Kayo Renato</strong>
                <span>Front-end Dev</span>
                <span>&</span>
                <span>Data Scientist</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} weight='light' /> Edit profile
                </a>
            </footer>
        </aside>
    );
}