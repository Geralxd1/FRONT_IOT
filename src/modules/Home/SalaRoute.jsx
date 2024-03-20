import { Box, Grid } from '@mui/material'
import React from 'react'
import CardInfo from '../../components/CardInfo/CardInfo'
import Salas from '../Salas/Salas'

const SalaRoute = () => {
    return (
        <Box sx={{ padding: { xs: '12px', md: '12px 48px' } }}>
            <Grid container>
                <Grid item md={4} xs={12}>
                    <CardInfo />
                </Grid>
                <Grid item md={8} xs={12}>
                    <Salas />
                </Grid>
            </Grid>
        </Box>
    )
}

export default SalaRoute