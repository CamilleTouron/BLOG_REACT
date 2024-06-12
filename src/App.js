import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from "./components/Footer";
import Home from "./components/Home";
import Card from "./components/Card"
import mockCardData from "./assets/mock/CardsProps";
import { useParams } from 'react-router-dom';

function App() {
    let cookie = document.cookie;
    const [isLogin, setIsLogin] = React.useState(cookie.includes('isLogin=true'));
    React.useEffect(() => {
        document.cookie = `isLogin=${isLogin}`;
        console.log('isLogin', isLogin)
    }, [isLogin]);

    let { id } = useParams();

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
                </header>
                <main>
                    <Routes>
                        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
                        <Route path="/" element={isLogin ? <Home /> : <Login setIsLogin={setIsLogin} />} />
                        <Route path="/card/:id" element={<Card card={mockCardData[id]} />} />
                    </Routes>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </Router>
    );
}

export default App;
