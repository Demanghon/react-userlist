import style from './Button.module.css'

interface ButtonProps {
    children: JSX.Element | string,
    type: "submit"|"button"
}

const Button = ({children}: ButtonProps) => {
    return <button className={style.button}>{children}</button>
}

export default Button;