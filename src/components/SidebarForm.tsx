import styles from './SidebarForm.module.css'
import { Checks, X } from 'phosphor-react'
import { useState } from 'react';

interface SidebarFormProps {
    handleSubmit: () => void;
    handleCancel: () => void;
}

export function SidebarForm(props: SidebarFormProps) {

    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [rule, setRule] = useState('')

    console.log('Name: ', name)
    console.log('URL: ', url)
    console.log('Rule: ', rule)

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    const handleUrl = (e: any) => {
        setUrl(e.target.value)
    }

    const handleName = (e: any) => {
        setName(e.target.value)
    }

    const handleRule = (e: any) => {
        setRule(e.target.value)
    }


    return (
        <aside className={styles.sidebar}>
            <div className={styles.cover}>
                <img className={styles.cover}
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80" />
            </div>
            <form className={styles.formProfile} onSubmit={handleSubmit}>
                <div className={styles.formContent}>
                    <strong>Url Avatar</strong>
                    <input
                        type="url"
                        name='avatar'
                        value={url}
                        onChange={handleUrl}
                    />

                    <strong className={styles.requiredInput}>Name</strong>
                    <input type="text"
                        name='name'
                        value={name}
                        onChange={handleName}
                        required
                    />

                    <strong className={styles.requiredInput}>Rule</strong>
                    <input
                        type="text"
                        name='rule'
                        value={rule}
                        onChange={handleRule}
                        required
                    />
                </div>
                <footer>
                    <button
                        className={styles.editProfile}
                        type='submit'
                    >
                        <Checks size={20} /> Save
                    </button>
                    <button type='submit' className={styles.cancel} onClick={props.handleCancel}>
                        <X size={20} /> Cancel
                    </button>
                </footer>
            </form>
        </aside>
    );
}