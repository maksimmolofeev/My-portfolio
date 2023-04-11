import { useTheme } from "./providers/ThemeProvider";
import './styles/index.scss'

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>toggle</button>
        </div>
    );
}

export default App