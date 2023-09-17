import { Box } from '@mui/material'
import React from 'react'
import "../../utils/styles/Cards/CardsStyles.scss";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card1 from "../../utils/img/Home/Cards/Card1.jpg"
import Card2 from "../../utils/img/Home/Cards/Card2.jpg"
import Card3 from "../../utils/img/Home/Cards/Card3.jpg"
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "white",
    fontSize: "11px",
    fontWeight: "bold",
    borderRadius: "15px",
    textTransform: "none",
    border: "1.5px solid white",
    padding: "4.5px 30px",
    '&:hover': {
        backgroundColor: "white",
        color: "black"
    },
}));

const Cards = () => {
    return (
        <Container className='contenedordecards'>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Box className='Card'>
                        <Box className='imagen'><img src={Card1} alt="" /></Box>
                        <Box className='contenido'>
                            <Box sx={{ marginBottom: "15px" }}>
                                <Typography className='title1' component="div" > 
                                    Transporte de Hidrocarburos
                                </Typography>
                                <Typography className="textdescription">
                                    Ofrecemos servicio de transporte con el más alto estándar a clientes mineros y estaciones de servicio (hidrocarburos y sus derivados).
                                </Typography>
                            </Box>
                            <Box display="flex" justifyContent="flex-end">
                                <ColorButton variant="outlined" size='large' href="/Servicios/Hidrocarburos">Ver más</ColorButton>
                            </Box>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box className='Card'>
                        <Box className='imagen'><img src={Card2} alt="" /></Box>
                        <Box className='contenido'>
                            <Box sx={{ marginBottom: "15px" }}>
                                <Typography className='title1' component="div" >
                                    Transporte de GLP
                                </Typography>
                                <Typography className="textdescription">
                                    Ofrecemos servicio de transporte de GLP a granel a los diferentes clientes con los que trabajamos. 
                                </Typography>
                            </Box>
                            <Box display="flex" justifyContent="flex-end">
                                <ColorButton variant="outlined" size='large'  href="Servicios/Glp">Ver más</ColorButton>
                            </Box>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box className='Card'>
                        <Box className='imagen'><img src={Card3} alt="" /></Box>
                        <Box className='contenido'>
                            <Box sx={{ marginBottom: "15px" }}>
                                <Typography className='title1' component="div" >
                                    Transporte de Cargas Diversas
                                </Typography>
                                <Typography className="textdescription">
                                    Ofrecemos servicio de transporte de materia variada para diferentes clientes 
                                </Typography>
                            </Box>
                            <Box display="flex" justifyContent="flex-end" >
                                <ColorButton variant="outlined" size='large' href="Servicios/CargasDiversas">Ver más</ColorButton>
                            </Box>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cards