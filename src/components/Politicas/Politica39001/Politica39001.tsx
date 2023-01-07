import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid, Link, Typography } from "@mui/material";
import "../../../utils/styles/Politicas/39001/39001Styles.scss";
import poster1 from "../../../utils/img/Politicas/seguridadvial.jpg";
import Image from "../../../utils/img/Home/Nosotros/Nosotros03.jpg";
const Politica39001 = () => {
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
      <Grid container style={{ padding: "82px 30px" }} spacing={3}>
        <Grid item xs={12} md={6}>
          <Box className="PoliticasInformacion">
            <Box textAlign="center">
              <Typography className="TittlePolitica39001">
                Política de Seguridad Vial
              </Typography>
            </Box>
            <Box>
              <Box>
                <Typography className="TextPolitica39001">
                  TRANSMDICAS S.R.L. es una empresa de Transporte por carretera
                  de materiales peligrosos y carga en general, presente en la
                  industria y minería;
                </Typography>
              </Box>
              <Box>
                <Typography className="TextPolitica39001">
                  Siendo conscientes de nuestra responsabilidad, nos
                  comprometemos a cumplir las 05 dimensiones de la seguridad
                  vial:
                </Typography>
              </Box>
              <Box>
                <Box>
                  <Typography className="TextPolitica39001">
                    1. Reducir, y en última instancia eliminar, la incidencia y
                    riesgo de las muertes y heridas graves derivadas de los
                    accidentes de tráfico.
                  </Typography>
                </Box>
                <Box>
                  <Typography className="TextPolitica39001">
                    2. Contar con conductores competentes y comprometidos con su
                    seguridad y la de los demás, portando documentación
                    actualizada según requerimientos de los entes reguladores
                    del Estado, estándares propios y de cliente.
                  </Typography>
                </Box>
                <Box>
                  <Typography className="TextPolitica39001">
                    3. Transitar con unidades operativas asegurando el
                    cumplimiento de mantenimientos e inspecciones efectivas.
                  </Typography>
                </Box>
                <Box>
                  <Typography className="TextPolitica39001">
                    4. Evaluar preventivamente las condiciones climáticas
                    adversas para continuar el tránsito
                  </Typography>
                </Box>
                <Box>
                  <Typography className="TextPolitica39001">
                    5. Asegurar tránsitos seguros en la red vial aplicando los
                    recursos tecnológicos según operación
                  </Typography>
                </Box>

                <Box>
                  <Typography className="TextPolitica39001">
                    6. Promover actitudes y hábitos positivos para el
                    cumplimiento de los objetivos de seguridad vial
                  </Typography>
                </Box>
                <Box>
                  <Typography className="TextPolitica39001">
                    7. Cumplir los requisitos legales aplicables y otros
                    compromisos adquiridos en relación a la seguridad vial.
                  </Typography>
                </Box>
                <Box>
                  <Typography className="TextPolitica39001">
                    La gerencia se compromete a brindar recursos para mantener y
                    mejorar continuamente el sistema de gestión de seguridad
                    vial
                  </Typography>
                </Box>
              </Box>
              <Box className="positiconversionandfecha">
                <Typography>V.00</Typography>
                <Typography>16/12/2022</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          {/* <div className='imagenContenedor9001' style={{zIndex:2}}>
                        <img src={Image} className="imgNosotrosHome" />
                    </div> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Politica39001;
