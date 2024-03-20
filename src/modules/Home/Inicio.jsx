import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';


const Inicio = () => {
    return (
        <Box>
            <Box component={'div'}
                src=''
                sx={{
                    backgroundImage: "url('/bannerHome.jpg')",
                    backgroundSize: 'cover', /* Esta línea ajusta la imagen para cubrir todo el contenedor */
                    backgroundPosition: 'center', /* Centra la imagen */
                    width: '100%',
                    height:{xs:'90vh',md:'80vh'},
                    color: '#4B4B4B',
                    textShadow: '0 0 15px #1976d2',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent:'center'
                }}
            >
                <Typography fontWeight={'bold'} variant='h1' sx={{display:{xs:'none', md:'flex'}}}>Proyecto de IoT</Typography>
                <Typography fontWeight={'bold'} variant='h2' sx={{display:{xs:'flex', md:'none'}, textAlign:'center'}}>Proyecto de IoT</Typography>
                <Typography variant='h2' sx={{display:{xs:'none', md:'flex'}}}>Proyecto basado en sensor PIR</Typography>
                <Typography variant='h4' sx={{display:{xs:'flex', md:'none'}, textAlign:'center'}}>Proyecto basado en sensor PIR</Typography>
                <Box sx={{width:'40%',display:'flex' ,justifyContent:'space-around', flexWrap:'wrap'}}>
                    <Button variant='contained' sx={{marginY:'12px'}} component={Link} to={"/salas"}>
                        Ver salas
                    </Button>
                    <Button variant='contained' color='secondary' sx={{marginY:'12px'}} component={Link} to={"/creditos"}>
                        Ver Creditos
                    </Button>
                </Box>

            </Box>
        </Box>
    )
}

export default Inicio