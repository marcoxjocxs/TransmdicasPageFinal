import React from "react";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Iso9001 from "../../utils/img/Nosotros/Iso9001.png";
import Iso45001 from "../../utils/img/Nosotros/Iso45001.png";
import Iso14001 from "../../utils/img/Nosotros/Iso14001.png";
import Iso39001 from "../../utils/img/Nosotros/Iso39001.jpeg";
import logohodelpe from "../../utils/img/Logos/Logo-Hodelpe.png";
import { Box, Grid, Container } from "@mui/material";
import "../../utils/styles/Home/CardCertificados/CardCertificadosStyles.scss";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
/* const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
*/
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "Black",
  fontSize: "11px",
  fontWeight: "bold",
  borderRadius: "15px",
  textTransform: "none",
  border: "1.5px solid white",
  backgroundColor: "rgba(211, 211, 211, 0.43)",
  padding: "4.5px 30px",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
}));

const CardCerti = () => {
  /* const classes = useStyles(); */

  return (
    <Box width="100%" paddingBottom="80px">
      <Container>
        <Box textAlign="center" paddingBottom="8%">
          <Typography className="textCertification">
            Nuestras Certificaciones
          </Typography>
        </Box>
        <Box>
          <Grid container className="contenedorCertificadosCard">
            <Grid item xs={12} md={6} lg={3} className="cardUnidadCertificado">
              <Box className="CardCertificacion">
                <Box className="imgcarCertication">
                  <a href="/9001">
                    <img src={Iso9001} height="100px" />
                  </a>
                </Box>
                <Box className="TextCardCetification">
                  <Typography className="TittleCardCertification">
                    Norma ISO 9001:2015
                  </Typography>
                  <Typography className="TextCardCertification">
                    Sistema de Gestion de la Calidad
                  </Typography>
                </Box>
                <Box className="ButtonsCardCertification">
                  <ColorButton variant="contained" size="large" href="/9001">
                    Ver más
                  </ColorButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3} className="cardUnidadCertificado">
              <Box className="CardCertificacion">
                <Box className="imgcarCertication">
                  <a href="/14001">
                    <img src={Iso14001} height="100px" />
                  </a>
                </Box>
                <Box className="TextCardCetification">
                  <Typography className="TittleCardCertification">
                    Norma ISO 14001:2015
                  </Typography>
                  <Typography className="TextCardCertification">
                    Sistema de Gestion Ambiental
                  </Typography>
                </Box>
                <Box className="ButtonsCardCertification">
                  <ColorButton variant="contained" size="large" href="/14001">
                    Ver más
                  </ColorButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3} className="cardUnidadCertificado">
              <Box className="CardCertificacion">
                <Box className="imgcarCertication">
                  <a href="/45001"><img src={Iso45001} height="100px" /></a>
                </Box>
                <Box className="TextCardCetification">
                  <Typography className="TittleCardCertification">
                    Norma ISO 45001:2018
                  </Typography>
                  <Typography className="TextCardCertification">
                    Sistema de seguridad y salud en el trabajo
                  </Typography>
                </Box>
                <Box className="ButtonsCardCertification">
                  <ColorButton variant="contained" size="large" href="/45001">
                    Ver más
                  </ColorButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3} className="cardUnidadCertificado">
              <Box className="CardCertificacion">
                <Box className="imgcarCertication">
                <a href="/39001"><img src={Iso39001} height="100px" /></a>
                </Box>
                <Box className="TextCardCetification">
                  <Typography className="TittleCardCertification">
                    Norma ISO 39001:2012
                  </Typography>
                  <Typography className="TextCardCertification">
                    {" "}
                    Sistema de gestion de la seguridad vial
                  </Typography>
                </Box>
                <Box className="ButtonsCardCertification">
                  <ColorButton variant="contained" size="large" href="/39001">
                    Ver más
                  </ColorButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CardCerti;
