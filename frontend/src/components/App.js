import React from "react";
import Main from './Main/Main';
import Header from './Header/Header';
import Nav from './Nav/Nav';


const App = () => {
    return (
        <div className="App">
            <div className='container'>
                <Header />
                <Nav />
                <Main />
            </div>
        </div>
    )
}

export default App;