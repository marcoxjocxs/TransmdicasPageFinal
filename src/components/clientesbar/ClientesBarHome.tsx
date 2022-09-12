import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid, Link, Typography } from "@mui/material";
import "../../assets/styles/Home/Clientes/ClientesStyles.scss";
import logorepsol from "../../assets/img/Logos/Repsol.png";

const ClientesBar = () => {
  return (
    <Box>
      <Box textAlign="center">
        <Typography className="titleClientes">Nuestros Clientes</Typography>
      </Box>
      <Box
        style={{
          background: "#d3d3d36e",
          padding: "30px 0",
        }}
      >
        <Container>
          <Grid container spacing={3} justifyContent="center">
            <Grid item md={6} xs={10} sm={8}>
              <Box className="ContenedorImgClientes" >
                
                <img src={logorepsol} className="imgclients" alt="" />
           
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ClientesBar;
