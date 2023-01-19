import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid, Link, Typography } from "@mui/material";
import "../../../utils/styles/Politicas/45001/45001Styles.scss";
import poster1 from "../../../utils/img/Politicas/seguridad.jpg";
import Image from "../../../utils/img/Home/Nosotros/Nosotros03.jpg";
const Politica45001 = () => {
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
      <Box className="Container45001">
        <Grid container spacing={3} justifyContent="flex-end">
          <Grid item xs={12} md={6}>
            <Box className="PoliticasInformacion">
              <Box textAlign="center">
                <Typography className="TittlePolitica45001">
                  Política de Seguridad y salud en el trabajo
                </Typography>
              </Box>
              <Box>
                <Box>
                  <Typography className="TextPolitica45001">
                    TRANSMDICAS S.R.L. es una empresa de Transporte por
                    carretera de materiales peligrosos y carga en general,
                    presente en la industria y minería;
                  </Typography>
                </Box>
                <Box>
                  <Typography className="TextPolitica45001">
                    Siendo conscientes de nuestra responsabilidad, nos
                    comprometemos a:
                  </Typography>
                </Box>
                <Box>
                  <Box>
                    <Typography className="TextPolitica45001">
                      Brindar un ambiente de trabajo seguro y saludable para el
                      óptimo desenvolvimiento de nuestros colaboradores con la
                      finalidad de prevenir accidentes, incidentes y
                      enfermedades profesionales relacionados con nuestras
                      actividades.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="TextPolitica45001">
                      Gestionar la seguridad de procesos basada en el
                      comportamiento a fin de eliminar los peligros y reducir
                      los riesgos asociados a nuestras actividades.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="TextPolitica45001">
                    Garantizar la participación y consulta activa de nuestros
                      colaboradores y sus representantes, en temas relacionados
                      a la gestión de seguridad y salud en el trabajo.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="TextPolitica45001">
                      Fortalecer la cultura de prevención de seguridad y salud
                      en el trabajo para el cumplimiento de los objetivos.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="TextPolitica45001">
                      Suministrar los recursos necesarios y adecuados para la
                      protección de nuestros colaboradores para el desarrollo de
                      sus actividades.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="TextPolitica45001">
                      Activar la herramienta “Para, Piensa y Actúa” cuando se
                      detecte un trabajo inseguro o presente de fatiga y
                      somnolencia; ante ello, no se tomará ningún tipo de
                      represalias y solo se reiniciarán las actividades si en la
                      evaluación de riesgos se determina que no afecta la
                      seguridad e integridad física y mental de los
                      colaboradores.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="TextPolitica45001">
                      Cumplir los requisitos legales aplicables y otros
                      requisitos en beneficio de las partes interesadas.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography className="TextPolitica45001">
                      Mejorar continuamente el Sistema de Gestión de Seguridad y
                      Salud en el trabajo, asegurando su compatibilidad con
                      otros sistemas de Gestión de la organización.
                    </Typography>
                  </Box>
                </Box>

                <Box className="positiconversionandfecha">
                  <Typography>V.02</Typography>
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

export default Politica45001;
