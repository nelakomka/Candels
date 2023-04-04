import { useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Header from './components/header';

import Candles from './pages/Candles';
import Main from './pages/Main';
import Melts from './pages/Melts';
import About from './pages/About Us';
import Contact from "./pages/Contact Us";

import './App.scss';

function App() {
    const [cartCount, setCartCount] = useState(0);

    return (
        <div className="App">
            <Header cartCount={cartCount} />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route
                    path="/candles"
                    element={
                        <Candles
                            cartCount={cartCount}
                            setCartCount={setCartCount}
                        />
                    }
                />
                <Route
                    path="/melts"
                    element={
                        <Melts
                            cartCount={cartCount}
                            setCartCount={setCartCount}
                        />
                    }
                />
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;
