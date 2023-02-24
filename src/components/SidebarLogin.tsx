import styles from './SidebarLogin.module.css'
import { User } from 'phosphor-react'

interface SidebarProps {
    handleSignIn: () => void;

}


export function SidebarLogin(props: SidebarProps) {
    return (
        <aside className={styles.sidebarLogin}>
            <div className={styles.cover}>
                <img className={styles.cover}
                    src="https://images.unsplash.com/photo-1676458482060-744386b5c273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            </div>
            <footer>
                <button onClick={props.handleSignIn}>
                    <User size={20} /> Login
                </button>
            </footer>
        </aside>
    );
}