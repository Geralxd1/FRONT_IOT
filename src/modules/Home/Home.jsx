import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/Header/Header'
import Salas from '../Salas/Salas'
import CardInfo from '../../components/CardInfo/CardInfo'
import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const Home = () => {
    return (
        <Box>
            <Header />
            <Outlet />
            <Box
                sx={{
                    backgroundColor: '#1976d2',
                    color: '#fff',
                    padding:'1rem',
                    textAlign:'center',
                }}>
                <Typography>
                    Con 💖 por Geraldy Brenda Cutipa Incacutipa
                </Typography>
            </Box>
        </Box>
    )
}

export default Home