import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '@pages/Login';
import './AuthRouter.scss';

const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/auth" element={<Login />} />
            <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
    );
}

export default AuthRouter;