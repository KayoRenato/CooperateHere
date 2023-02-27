import styles from './Sidebar.module.css'
import { PencilLine, SignOut } from 'phosphor-react'
import { Avatar } from './Avatar';
import userData from '../context/userData';


export function Sidebar() {
    const { userComment } = userData()

    return (
        <aside className={styles.sidebar}>
            <div className={styles.cover}>
                <img className={styles.cover}
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80" />
            </div>
            <div className={styles.profile}>
                <Avatar src={userComment?.avatar} hasBorder />
                <strong>{userComment?.name}</strong>
                <span>{userComment?.role}</span>
            </div>
            <footer>
                <button className={styles.editProfile} onClick={() => console.log('Edit Profile')} >
                    <PencilLine size={20} /> Edit
                </button>
                <button className={styles.signOut} onClick={() => console.log('Log Out Profile')}>
                    <SignOut size={20} /> Logout
                </button>
            </footer>
        </aside>
    );
}