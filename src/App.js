import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';

import { publicRoutes } from './routes';
import { clientLeaveLab, clientSendLab, disconnectSocket, initiateSocketConnection } from './socket.service';
import { getLabIdFromPath } from './constants/handler';

function App() {
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (token) {
            initiateSocketConnection();
        }
        return () => {
            disconnectSocket();
        };
    }, [token]);

    const previosLabId = localStorage.getItem('currentLabId');
    const currentLabId = getLabIdFromPath(window.location.href);
    useEffect(() => {
        localStorage.setItem('currentLabId', currentLabId);
        if (previosLabId && currentLabId) {
            clientLeaveLab(previosLabId);
            clientSendLab(currentLabId);
        }
    }, [previosLabId, currentLabId]);

    return (
        <div>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = DefaultLayout;

                            if (route.component) Layout = route.component;
                            else if (route.component === null) Layout = Fragment;

                            return <Route key={index} path={route.path} element={<Layout />} />;
                        })}
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
