import styles from './SidebarForm.module.css'
import { Checks, X } from 'phosphor-react'
import { useForm } from 'react-hook-form';
import userData from '../../context/userData';
import { UserProps } from '../../interfaces/IUser';


interface SideFormProps {
    handleCancel: () => void;
}

export function SidebarForm(props: SideFormProps) {

    const { userComment, setUserComment } = userData()

    const defaultValues: UserProps = {
        name: '',
        avatar: '',
        role: ''
    }

    const { handleSubmit, register } = useForm({ defaultValues })

    const UserDataForm = (data: UserProps) => {
        if (data.name && data.role) {
            data.avatar = data.avatar ? data.avatar : 'https://api.dicebear.com/5.x/fun-emoji/svg?backgroundColor=d1d4f9'
            setUserComment!(data)
        }
    }

    return (
        <aside className={styles.sidebar}>
            <div className={styles.cover}>
                <img className={styles.cover}
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80" />
            </div>
            <form className={styles.formProfile} onSubmit={handleSubmit(UserDataForm)}>
                <div className={styles.formContent}>
                    <strong>Url Avatar</strong>
                    <input type="url"
                        placeholder='https://... '
                        autoFocus
                        {...register('avatar')} />

                    <strong className={styles.requiredInput}>Name</strong>
                    <input type="text"
                        placeholder='Insert your name'
                        {...register('name', { required: true })} />

                    <strong className={styles.requiredInput}>Role</strong>
                    <input type="text"
                        placeholder='Type your position'
                        {...register('role', { required: true })} />
                </div>
                <footer>
                    <button
                        className={styles.editProfile} type='submit'>
                        <Checks size={20} /> Save
                    </button>
                    <button type='reset' className={styles.cancel} onClick={props.handleCancel}>
                        <X size={20} /> Cancel
                    </button>
                </footer>
            </form>
        </aside >
    );
}