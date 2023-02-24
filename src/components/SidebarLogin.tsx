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
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
                />
            </div>
            <span className={styles.info}>Login to comment</span>

            <footer>
                <button onClick={props.handleSignIn}>
                    <User size={20} /> Login
                </button>
            </footer>
        </aside>
    );
}