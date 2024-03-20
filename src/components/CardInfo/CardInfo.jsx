import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import { Grid, Paper } from '@mui/material';
import imagenSalaVacia from '/libre.svg'
import imagenSalaLlena from '/ocupado.svg'
import imagenEdificoAbierto from '/abierto.svg'
import imagenEdificoCerrado from '/cerrado.svg'

import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import axios from 'axios';


const url = 'https://iotsi-production.up.railway.app/estadoedificio/actualizar'
const url2 = 'https://iotsi-production.up.railway.app/estadoedificio'

const CardInfo = () => {
    const [estadoEdifico, setEstadoEdificio] = useState('');
    const [estadoTitulo, setEstadoTitulo] = useState('ABIERTO');

    function actualizarFechaHora() {
        const fechaActual = new Date();

        // Obtener la fecha
        const fecha = fechaActual.toLocaleDateString();

        // Obtener la hora
        const hora = fechaActual.toLocaleTimeString();

        // Actualizar los elementos HTML con la fecha y la hora
        document.getElementById('fecha').textContent = fecha;
        document.getElementById('hora').textContent = hora;
    }

    function actualizarEstadoEdificio(estado) {
        if (estado === 'abierto') {
            setEstadoEdificio('abierto');
            setEstadoTitulo('ABIERTO');
        }
        else {
            setEstadoEdificio('cerrado')
            setEstadoTitulo('CERRADO');
        }
        enviarActualizacion(estado)
    }

    const enviarActualizacion = async (data) => {
        try {
            const response = await axios.put(url, {"estado":data});
            console.log(response)
        } catch (error) {
            alert(error.response?.data.message); // right now idk how to make a custom alert :()
        } finally {

        }
    };

    // Actualizar la fecha y hora cada segundo (1000 milisegundos)
    setInterval(actualizarFechaHora, 1000);

    const getData = async () => {
        try {
            const response = await axios.get(url2);
            console.log(response.data.data[0].estado)
            if (response.data.data[0].estado === 'abierto') {
                setEstadoEdificio('abierto');
                setEstadoTitulo('ABIERTO');
            }
            else {
                setEstadoEdificio('cerrado')
                setEstadoTitulo('CERRADO');
            }
        } catch (error) {
            alert(error)
        }
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <Paper elevation={6}>
            <CardContent>
                <Typography sx={{ fontSize: 14, display: 'flex', fontWeight: 'bold', mb: '0' }} color="text.secondary" gutterBottom>
                    <p>Son&nbsp;</p><p id="hora"></p><p>&nbsp;del&nbsp;</p><p id="fecha"></p>
                </Typography>
                <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                    Espacio informativo
                </Typography>
                <Typography variant="body2">
                    Para entender mejor la grafica, puede seguir esta leyenda de figuras.
                </Typography>
                <Card sx={{ my: '1rem', border: '.5px solid black', padding: '1rem', backgroundColor: '#4791DB ', color: '#fff', display: 'flex', justifyContent: 'center' }} elevation={6}>
                    <Grid container sx={{ width: '100%' }} rowSpacing={1}>
                        <Grid item xs={12}>
                            <Typography mb={1} fontWeight={'bold'} variant='h5' textAlign={'center'} component={'p'}>Leyenda</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                            <ArrowRightAltIcon />
                            <Typography variant='h6' textAlign={'center'} component={'p'}>
                                Espacio Libre
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box
                                component={'img'}
                                src={imagenSalaVacia}
                                sx={{
                                    width: '40%'
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                            <ArrowRightAltIcon />
                            <Typography variant='h6' textAlign={'center'} component={'p'}>
                                Espacio Ocupado
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box
                                component={'img'}
                                src={imagenSalaLlena}
                                sx={{
                                    width: '40%'
                                }}
                            />
                        </Grid>
                    </Grid>
                </Card>
                <Card sx={{ my: '1rem', border: '.5px solid black', padding: '1rem', backgroundColor: '#C3DBF4 ', display: 'flex', justifyContent: 'center' }} elevation={6}>
                    <Grid container sx={{ width: '100%' }} rowSpacing={1}>
                        <Grid item xs={12}>
                            <Typography mb={1} fontWeight={'bold'} variant='h5' component={'p'} textAlign={'center'}>Estado de edificio</Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Button size="small" variant='contained' color='success'
                                    startIcon={<LockOpenIcon />}
                                    fullWidth
                                    sx={{ marginY: '12px' }}
                                    onClick={() => actualizarEstadoEdificio('abierto')}
                                >
                                    Abrir edificio</Button>
                                <Button size="small" variant='contained' color='error'
                                    startIcon={<LockIcon />}
                                    fullWidth
                                    onClick={() => actualizarEstadoEdificio('cerrado')}
                                >
                                    Cerrar edificio</Button>

                            </Box>
                        </Grid>
                        <Grid item xs={11} md={7} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Box
                                component={'img'}
                                src={estadoEdifico === 'abierto' ? imagenEdificoAbierto : imagenEdificoCerrado}
                                sx={{
                                    width: '75%',
                                }}
                            />
                            <Card elevation={6} sx={{ padding: '0 1rem' }}>
                                <Typography fontWeight={'bold'} variant='h6' component={'p'}>{estadoTitulo}</Typography>
                            </Card>

                        </Grid>
                        <Grid item xs={1} md={1} sx={{ display: 'flex', alignItems: 'start' }}>
                            <Box
                                component={'img'}
                                src={estadoEdifico === 'abierto' ? imagenEdificoCerrado : imagenEdificoAbierto}
                                sx={{
                                    width: '100%'
                                }}
                            />
                        </Grid>
                    </Grid>
                </Card>
            </CardContent>
        </Paper>
    )
}

export default CardInfo