import styles from './SidebarForm.module.css'
import { Checks } from 'phosphor-react'

export function SidebarForm() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.cover}>
                <img className={styles.cover}
                    src="https://images.unsplash.com/photo-1676458482060-744386b5c273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            </div>
            <form className={styles.formProfile} onSubmit={() => { }}>
                <div className={styles.formContent}>
                    <strong>Url Avatar</strong>
                    <input type="url" name='avatar' />
                    <strong>Name</strong>
                    <input type="text" name='name' required />
                    <strong>Rule</strong>
                    <input type="text" name='rule' required />
                </div>
                <footer>
                    <button type='submit' className={styles.editProfile} >
                        <Checks size={20} /> Save
                    </button>
                </footer>
            </form>
        </aside>
    );
}