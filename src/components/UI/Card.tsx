import { ReactNode } from 'react';
import style from './Card.module.css'

interface CardProps {
    children: ReactNode
}

const Card = ({children}: CardProps) => {
    return <div className={style.card}>{children}</div>
}

export default Card;