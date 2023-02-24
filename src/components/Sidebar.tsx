import styles from './Sidebar.module.css'
import { PencilLine, SignOut } from 'phosphor-react'
import { Avatar } from './Avatar';

interface SidebarProps {
    handleEditProfile: () => void;
    handleSignOut: () => void;

}

export function Sidebar(props: SidebarProps) {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.cover}>
                <img className={styles.cover}
                    src="https://images.unsplash.com/photo-1676458482060-744386b5c273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className={styles.profile}>
                <Avatar src='https://github.com/KayoRenato.png' hasBorder />
                <strong>Kayo Renato</strong>
                <span>Front-end Dev</span>
            </div>
            <footer>
                <button className={styles.editProfile} onClick={props.handleEditProfile} >
                    <PencilLine size={20} /> Edit
                </button>
                <button className={styles.signOut} onClick={props.handleSignOut}>
                    <SignOut size={20} /> Logout
                </button>
            </footer>
        </aside>
    );
}