import cls from "./Footer.module.scss"

export const Footer = () => {
    return (
        <footer className={cls.footer}>
            <div className={cls.content}>
                <p className={cls.text}>© {new Date().getFullYear()} Максим Молофеев</p>
            </div>
        </footer>
    );
}
