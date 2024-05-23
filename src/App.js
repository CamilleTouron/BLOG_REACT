import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
    let cookie = document.cookie;
    const [isLogin, setIsLogin] = React.useState(cookie.includes('isLogin=true'));
    React.useEffect(() => {
        document.cookie = `isLogin=${isLogin}`;
        console.log('isLogin', isLogin)
    }, [isLogin]);
    return (
        <div className="App">
            <header className="App-header">
                <Navbar setIsLogin={setIsLogin}/>
            </header>
            <main>
                {!isLogin && <Login setIsLogin={setIsLogin}/>}
                {isLogin && <Home/>}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
