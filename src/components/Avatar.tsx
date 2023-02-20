import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar(props: AvatarProps) {

    const invalidUrl = 'https://api.dicebear.com/5.x/fun-emoji/svg?backgroundColor=d1d4f9'

    return (
        <img
            src={props.src ?? invalidUrl}
            className={props.hasBorder ? styles.hasBorder : styles.noBorder}
        />
    )
}