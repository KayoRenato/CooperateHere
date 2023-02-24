import styles from './SidebarForm.module.css'
import { Checks, X } from 'phosphor-react'

interface SidebarFormProps {
    handleSubmit: () => void;
    handleCancel: () => void;
}

export function SidebarForm(props: SidebarFormProps) {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.cover}>
                <img className={styles.cover}
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80" />
            </div>
            <form className={styles.formProfile} onSubmit={() => { }}>
                <div className={styles.formContent}>
                    <strong>Url Avatar</strong>
                    <input type="url" name='avatar' />
                    <strong className={styles.requiredInput}>Name</strong>
                    <input type="text" name='name' required />
                    <strong className={styles.requiredInput}>Rule</strong>
                    <input type="text" name='rule' required />
                </div>
                <footer>
                    <button type='submit' className={styles.editProfile} onClick={props.handleSubmit}>
                        <Checks size={20} /> Save
                    </button>
                    {/* TODO - Maybe change Button Cancel to Tag A */}
                    <button className={styles.cancel} onClick={props.handleCancel}>
                        <X size={20} /> Cancel
                    </button>
                </footer>
            </form>
        </aside>
    );
}