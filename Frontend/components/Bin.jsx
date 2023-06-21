// import React from 'react'
import { fetchData } from './utils/Rest'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsSubwayFilledIcon from '@mui/icons-material/DirectionsSubwayFilled';
import Typography from '@mui/material/Typography';
import t from '../components/style/TravelCard.module.css'
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const defaultTheme = createTheme();

export default function Bin() {
    const packageList = [FlightIcon, DirectionsSubwayFilledIcon]
    return (
        <main>
            <Container sx={{ py: 5 }} maxWidth="md">
                <Grid container spacing={20}>
                    {packageList.map((card) => (
                        <Grid item key={card} xs={14} sm={8} md={6}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#8F5A3A', justifyContent: 'space-evenly', alignItems: 'center' }}
                            >
                                <IconButton className={t.ico}>
                                    <FlightIcon style={{
                                        color: '#ffffff',
                                        fontSize: '100px',
                                    }} />
                                </IconButton>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <h1 className={t.h1}>Take a Train!</h1>
                                        <p className={t.p}>Have a safe journey!</p>
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    );
}