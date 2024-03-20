
import Home from './modules/Home/Home'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Salas from './modules/Salas/Salas';
import Inicio from './modules/Home/Inicio';
import SalaRoute from './modules/Home/SalaRoute';
import Creditos from './modules/Home/Creditos'

const routes = [
    {
        path: '/',
        element: <Home/>,
        errorElement: <p>Que fue mano?</p>,
    },
    /*
    {
        path: '/salas',
        element: <SalaRoute/>,
        errorElement: <p>Que fue mano?</p>,
    },
    {
        path: '/creditos',
        element: <Creditos/>,
        errorElement: <p>Que fue mano?</p>,
    },
    */
];

export default routes;
