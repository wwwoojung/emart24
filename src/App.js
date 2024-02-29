import Header from "./pages/Header.js";

import './style/reset.scss'
import './style/common.scss';
import './style/font.scss';
import './style/style.scss';
import Main from "./pages/Main.js";

const App = () => {
    return (
        <>
        <Header />
        <Main/>
        </>
    )
}

export default App;