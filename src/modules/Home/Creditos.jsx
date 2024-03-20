import { Box, Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from '@mui/material'
import React from 'react'

const Creditos = () => {
    return (
        <Box>
            <Paper sx={{ margin: { xs: '12px', md: '12px 48px' }, padding: { xs: '12px', md: '16px 48px' } }} elevation={6}>
                <Paper elevation={2} sx={{ margin: '0 auto', width: 'auto', padding: '1rem' }}>
                    <Typography>
                        <strong>Elaborado por:</strong>
                        Geraldy Brenda Cutipa Incacutipa<br />
                        <strong>Codigo de estudiante:</strong>
                        195906<br />
                    </Typography>
                </Paper>

                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: { xs: '12px', md: '12px 48px' } }}>
                    <Card sx={{ width: { xs: '100%', md: '25%' } }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="data:image/png;base64,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"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                WOKWI
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Simulacion de funcionamiento fisico y conexiones.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant='contained' fullWidth color='secondary'
                                onClick={() => window.open('https://wokwi.com/projects/392889210763441153', '_blank')}
                            >Ir</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ width: { xs: '100%', md: '25%' } }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="data:image/png;base64,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"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                INFORME
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Informe de implementacion y materiales utilizados (en proceso).
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant='contained' fullWidth color='secondary'>Ir</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ width: { xs: '100%', md: '25%' } }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://www.ceupe.com/images/easyblog_articles/3919/b2ap3_amp_cdigo-fuente.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                CODIGO BASE
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Codigo elaborado, Back con NodeJs y Front con React, ademas de arduinoIDE.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant='contained' 
                            onClick={() => window.open('https://github.com/Geralxd1/iotNode2024', '_blank')}
                            >Back</Button>
                            <Button size="small" variant='contained' color='secondary'
                            onClick={() => window.open('https://wokwi.com/projects/392375201260718081', '_blank')}>
                                Front</Button>
                            <Button size="small" variant='contained' color='info'
                            onClick={() => window.open('https://wokwi.com/projects/392375201260718081', '_blank')}>
                                Arduino</Button>
                        </CardActions>
                    </Card>
                </Box>

            </Paper>

        </Box>
    )
}

export default Creditos