import cls from './Button.module.scss'

export const Theme = {
    CLEAR: 'clear',
    OUTLINE: 'outline'
}

export const Button = (props) => {
    const {
        children,
        btnTheme,
        ...otherProps
    } = props
    return (
        <button
            className={`${cls.button} ${cls[btnTheme]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
}
