import React, { useEffect, useState } from 'react'
import './Salas.css'
import { Box, Button, Card, Container, Grid, Typography } from '@mui/material'
import imagenSalaVacia from '/libre.svg'
import imagenSalaLlena from '/ocupado.svg'
import InfoIcon from '@mui/icons-material/Info';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import axios from 'axios'

const URL = 'https://iotsi-production.up.railway.app/salasEstudio'
const Salas = () => {
    const [estadoSala1, setEstadoSala1] = useState('');
    const [estadoSala2, setEstadoSala2] = useState('');
    const [estadoSala3, setEstadoSala3] = useState('');
    const [estadoSala4, setEstadoSala4] = useState('');

    const getData = async () => {
        try {
            const response = await axios.get(URL);
            console.log(response.data.data)
            const data = response.data.data
            setEstadoSala1(data[0].disponibilidad)
            setEstadoSala2(data[1].disponibilidad)
            setEstadoSala3(data[2].disponibilidad)
            setEstadoSala4(data[3].disponibilidad)

        } catch (error) {
            alert(error)
        }
    };
    useEffect(() => {
        getData();

        // Llama a fetchData cada 10 segundos
        const intervalId = setInterval(getData(), 1000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Box sx={{ marginTop: '12px' }}>
            <Container maxWidth="xl">
                <Grid container >
                    <Grid item xs={4}>
                        <Box component={'img'}
                            src={estadoSala1 === 'vacio' ? imagenSalaVacia : '/ocupado.svg'}
                            sx={{ width: '90%', height: 'auto', margin:'0 auto' }}
                        >
                        </Box>
                        <Box component={'div'} sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexDirection: { xs: 'column', md: 'row' }
                        }}>
                            <Card sx={{
                                padding: '.5rem 1rem',
                                backgroundColor: estadoSala1 === 'vacio' ? '#4caf50' : '#d32f2f',
                                color: '#fff'
                            }}>
                                Espacio 1: <strong>{estadoSala1.toUpperCase()}</strong>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box component={'img'}
                            src={estadoSala2 === 'vacio' ? imagenSalaVacia : '/ocupado.svg'}
                            sx={{ width: '90%', height: 'auto', margin:'0 auto' }}
                        >
                        </Box>
                        <Box component={'div'} sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexDirection: { xs: 'column', md: 'row' }
                        }}>
                            <Card sx={{
                                padding: '.5rem 1rem',
                                backgroundColor: estadoSala2 === 'vacio' ? '#4caf50' : '#d32f2f',
                                color: '#fff'
                            }}>
                                Espacio 2: <strong>{estadoSala2.toUpperCase()}</strong>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box component={'img'}
                            src={estadoSala3 === 'vacio' ? imagenSalaVacia : '/ocupado.svg'}
                            sx={{ width: '90%', height: 'auto', margin:'0 auto' }}
                        >
                        </Box>
                        <Box component={'div'} sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexDirection: { xs: 'column', md: 'row' }
                        }}>
                            <Card sx={{
                                padding: '.5rem 1rem',
                                backgroundColor: estadoSala3 === 'vacio' ? '#4caf50' : '#d32f2f',
                                color: '#fff'
                            }}>
                                Espacio 3: <strong>{estadoSala3.toUpperCase()}</strong>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant='h3' sx={{ display: { xs: 'flex', md: 'none' } }}>
                            Sala de Estudio
                        </Typography>
                        <Typography variant='h2' sx={{ display: { xs: 'none', md: 'flex' } }}>
                            Sala de Estudio
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Box component={'img'}
                            src={estadoSala4 === 'vacio' ? imagenSalaVacia : '/ocupado.svg'}
                            sx={{ width: '90%', height: 'auto', margin:'0 auto' }}
                        >
                        </Box>
                        <Box component={'div'} sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexDirection: { xs: 'column', md: 'row' }
                        }}>
                            <Card sx={{
                                padding: '.5rem 1rem',
                                backgroundColor: estadoSala4 === 'vacio' ? '#4caf50' : '#d32f2f',
                                color: '#fff'
                            }}>
                                Espacio 4: <strong>{estadoSala4.toUpperCase()}</strong>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        marginTop: '12px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap'
                    }}>
                    <Button onClick={() => setEstadoSala1('ocupado')}>Cambiar Estado Sala 1</Button>
                    <Button onClick={() => setEstadoSala2('ocupado')}>Cambiar Estado Sala 2</Button>
                    <Button onClick={() => setEstadoSala3('ocupado')}>Cambiar Estado Sala 3</Button>
                    <Button onClick={() => setEstadoSala4('ocupado')}>Cambiar Estado Sala 4</Button>
                </Box>
            </Container>
        </Box>
    )
}

export default Salas