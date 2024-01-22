import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid, Link, Typography } from "@mui/material";
import "../../../utils/styles/Politicas/9001/9001Styles.scss";
import poster1 from "../../../utils/img/Politicas/calidad1.jpg";
import Image from "../../../utils/img/Home/Nosotros/Nosotros03.jpg";
import CircleIcon from "@mui/icons-material/FiberManualRecord";

const Politica9001 = () => {
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
                <Typography className="TittlePolitica9001">
                  Política de Calidad
                </Typography>
              </Box>
              <Box>
                <Box>
                  <Typography className="TextPolitica9001Part1">
                    TRANSMDICAS S.R.L. es una empresa de Transporte por
                    carretera de materiales peligrosos y carga en general,
                    presente en la industria y minería; conscientes de nuestra
                    responsabilidad, nos comprometemos a:
                  </Typography>
                </Box>
                {/* <Box>
                  <Typography className="TextPolitica9001Part2">
                    Siendo conscientes de nuestra responsabilidad, nos
                    comprometemos a:
                  </Typography>
                </Box> */}
                <Box style={{ marginBottom: "20px" }}>
                  <Box display="flex">
                    <Box>
                      <CircleIcon
                        style={{ fontSize: "small", marginRight: "10px" }}
                      />
                    </Box>
                    <Typography className="TextPolitica9001Part3">
                      Cumplir los objetivos estratégicos de calidad de la
                      organización.
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <Box>
                      <CircleIcon
                        style={{ fontSize: "small", marginRight: "10px" }}
                      />
                    </Box>
                    <Typography className="TextPolitica9001">
                      Fortalecer las competencias del personal en cada etapa del
                      proceso de transporte para asegurar la satisfacción de
                      nuestros clientes.
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <Box>
                      <CircleIcon
                        style={{ fontSize: "small", marginRight: "10px" }}
                      />
                    </Box>
                    <Typography className="TextPolitica9001">
                      Brindar el servicio con flota vehicular en óptimas
                      condiciones según estándares del cliente.
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <Box>
                      <CircleIcon
                        style={{ fontSize: "small", marginRight: "10px" }}
                      />
                    </Box>
                    <Typography className="TextPolitica9001">
                      Cumplir los requisitos legales y otros aplicables a
                      nuestras actividades.
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography className="TextPolitica9001">
                    Revisar y mejorar continuamente el sistema de gestión de
                    calidad.
                  </Typography>
                </Box>
                <Box className="positiconversionandfecha">
                  <Typography>V.02</Typography>
                  <Typography>21/12/2023</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Politica9001;
