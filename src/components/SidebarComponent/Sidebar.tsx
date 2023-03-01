import styles from './Sidebar.module.css'
import { PencilLine, SignOut } from 'phosphor-react'
import userData from '../../context/userData';
import { Avatar } from '../Avatar';


interface SideLoggedProps {
    handleEditProfile: () => void;
}

export function Sidebar(props: SideLoggedProps) {
    const { userComment, setUserComment } = userData()

    function handleLogout() {
        setUserComment!(null)
    }

    return (
        <aside className={styles.sidebar}>
                <img className={styles.cover}
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80" />
            <div className={styles.profile}>
                <Avatar src={userComment?.avatar} hasBorder />
                <strong>{userComment?.name}</strong>
                <span>{userComment?.role}</span>
            </div>
            <footer>
                <button className={styles.editProfile} onClick={props.handleEditProfile} >
                    <PencilLine size={20} /> Edit
                </button>
                <button className={styles.signOut} onClick={handleLogout}>
                    <SignOut size={20} /> Logout
                </button>
            </footer>
        </aside>
    );
}