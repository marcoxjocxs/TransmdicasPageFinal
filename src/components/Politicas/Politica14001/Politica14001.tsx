import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid, Link, Typography } from "@mui/material";
import "../../../utils/styles/Politicas/14001/14001Styles.scss";
import poster1 from "../../../utils/img/Politicas/Ambiental.jpg";
import Image from "../../../utils/img/Home/Nosotros/Nosotros03.jpg";
import CircleIcon from "@mui/icons-material/FiberManualRecord";
const Politica14001 = () => {
  return (
    <Box
      style={{
        position: "relative",
        marginTop: "-20px",
        zIndex: "1",
        paddingBottom: "20px",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box className="PoliticasPortada">
        <img src={poster1} alt="" />
      </Box>
      <Box style={{ padding: "82px 30px" }}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Box className="PoliticasInformacion">
              <Box textAlign="center">
                <Typography className="TittlePolitica14001">
                  Política Ambiental
                </Typography>
              </Box>
              <Box>
                <Box>
                  <Typography className="TextPolitica14001Part1">
                    Transmdicas es una empresa de Transporte por carretera de
                    materiales peligrosos y carga en general, presente en la
                    industria y minería;
                  </Typography>
                </Box>
                <Box>
                  <Typography className="TextPolitica14001Part2">
                    Siendo conscientes de nuestra responsabilidad, nos
                    comprometemos a:
                  </Typography>
                </Box>
                <Box style={{ marginBottom: "20px" }}>
                  <Box display="flex">
                    <Box>
                      <CircleIcon
                        style={{ fontSize: "small", marginRight: "10px" }}
                      />
                    </Box>
                    <Typography className="TextPolitica14001Part3">
                    Controlar los impactos ambientales significativos para el cumplimiento de 
                    los objetivos organizacionales.
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <Box>
                      <CircleIcon
                        style={{ fontSize: "small", marginRight: "10px" }}
                      />
                    </Box>
                    <Typography className="TextPolitica14001">
                    Fomentar una cultura de concientización y formación para la protección del 
                    medio ambiente y el uso sostenible de los recursos.
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <Box>
                      <CircleIcon
                        style={{ fontSize: "small", marginRight: "10px" }}
                      />
                    </Box>
                    <Typography className="TextPolitica14001">
                      Cumplir los requisitos legales ambientales y otros aplicables
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography className="TextPolitica14001">
                    Revisar y mejorar continuamente el sistema de gestión ambiental
                  </Typography>
                </Box>
                <Box className="positiconversionandfecha">
                  <Typography>V.01</Typography>
                  <Typography>16/12/2022</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Politica14001;
