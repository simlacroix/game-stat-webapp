import React from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import {Navigate, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthRedirection from './components/AuthRedirection';
import DashboardPrivateRoutes from './components/DashboardPrivateRoutes';
import {useAppSelector} from './app/hooks';
import AutoLoginPage from './pages/AutoLoginPage';

function App() {
    const auth = useAppSelector(state => state.auth);
    const backgroundImageCss = auth.isAuthenticated ? 'main-bg-full' : 'main-bg-circle';

    return (

        <div className="App">
            <div className="container">
                <Header/>

                <div
                    className={`${backgroundImageCss}`}>
                    <main className="w-full h-full overflow-y-auto">
                        <Routes>
                            <Route path={'/register'} element={<RegisterPage/>}/>
                            <Route path={'/login'} element={<LoginPage/>}/>
                            <Route path={'/'} element={<AuthRedirection/>}/>
                            <Route path={'*'} element={<Navigate replace to={'/'}/>}/>
                            <Route path={'/dashboard/*'} element={<DashboardPrivateRoutes/>}/>
                            <Route path={'/autoLogin'} element={<AutoLoginPage/>}/>
                        </Routes>
                    </main>
                </div>
            </div>

        </div>
    );
}

export default App;
