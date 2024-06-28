import React from 'react';
import { useLocation } from '../../node_modules/react';

function NotFound() {
    let location = useLocation();

    return (
        <div>
            <h1>Nie znaleziono elementu: {location.pathname}</h1>
        </div>
    );
}

export default NotFound;
