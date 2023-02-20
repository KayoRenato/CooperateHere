import styles from './Avatar.module.css'

export function Avatar({ hasBorder, url = 'https://api.dicebear.com/5.x/fun-emoji/svg?backgroundColor=d1d4f9' }) {
    return (
        <img
            src={url}
            className={hasBorder ? styles.hasBorder : styles.noBorder}
        />
    )
}