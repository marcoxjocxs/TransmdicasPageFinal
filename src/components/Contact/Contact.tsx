import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "../../../utils/img/otros/camionprueba.jpg";
import Grid from "@mui/material/Grid";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "../../utils/styles/Contacto/ContactoStyle.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { TextField, Button } from "@mui/material";
import emailjs from "emailjs-com";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import renzo from "../../utils/img/Galeria/8.jpg";
import { FourMp } from "@mui/icons-material";
import Swal from "sweetalert2";
import { Box } from "@mui/material";
const Contact = () => {

  function enviarEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qr272dx",
        "template_8psg3ga",
        e.target,
        "v55PEstGaGK68JSxs"
      )
      .then((res) => {
        console.log(res);
        Swal.fire("Enviado con exito!");
        const info1 = document.getElementsByTagName("input")[0];
        const info2 = document.getElementsByTagName("input")[1];
        const info3 = document.getElementsByTagName("input")[2];
        const info4 = document.getElementsByTagName("input")[3];
        const info5 = document.getElementsByTagName("input")[4];
        const info6 = document.getElementsByTagName("input")[5];
        const info7 = document.getElementsByTagName("textarea")[0];

        const form = [info1, info2, info3, info4, info5, info6, info7];

        if (form) {
          form.map((input) => {
            input.value = "";
          });
        }
      });
  }
  return (
    <Box className="ContenedorContacto">
      <Container >
        <Grid container spacing={5}>
          <Grid item xs={12} md={7}>
            <Box className="Part1Contact">
              <Box className="contenedorPartContact">
                <Box>
                  <Typography className="TextContact">
                    Si tienes alguna consulta
                  </Typography>
                </Box>
                <Box className="Contactanos">
                  <Typography className="TittleContact">Contáctanos</Typography>
                </Box>
                <Box className="ContendorContact2">
                  <Box className="ContactoCorreo">
                    <Box style={{ marginRight: "10px" }}>
                      <EmailIcon />
                    </Box>
                    <Typography className="TextContact">
                      transmdicas@grupopezo.com
                    </Typography>
                  </Box>
                  <Box className="ContactoCall">
                    <Box style={{ marginRight: "10px" }}>
                      <CallIcon />
                    </Box>
                    <Typography className="TextContact">
                      Teléfono (054) 40-1065
                    </Typography>
                  </Box>
                  <Box className="ContactoCall">
                    <Box style={{ marginRight: "10px" }}>
                      <CallIcon />
                    </Box>
                    <Typography className="TextContact">
                      Celular 958-796-191
                    </Typography>
                  </Box>
                  <Box className="ContactoUbicacion">
                    <Box style={{ marginRight: "10px" }}>
                      <LocationOnIcon />
                    </Box>
                    <Typography>
                      Urb. Villa Hermosa, Mz. C - lote 11 PAUCARPATA AREQUIPA
                    </Typography>
                  </Box>
                  <Box className="ContactoUbicacion">
                    <Box style={{ marginRight: "10px" }}>
                      <LocationOnIcon />
                    </Box>
                    <Typography>
                      Asoc. Casa granja villa arapa Mz N, lt 1,2,13 y 14 Cerro Colorado-Arequipa
                    </Typography>
                  </Box>
                  <Grid container>
                    <Box>
                      <img src={renzo} className="imgrenzocontacto" />
                    </Box>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box className="Part2Contact">
              <Box className="contenedor2PartContact">
                <Typography className="TittleContactoEmailJs">Contactanos para más informacion</Typography>
                <Box component="form" id="formulario" onSubmit={enviarEmail}>
                  <div className="form-group">
                    <Box>
                      <Typography>Razón Social</Typography>
                      <TextField
                        type="text"
                        className="form-control"
                        id="razon_social"
                        name="razon_social"
                        defaultValue=" "
                        variant="standard"
                        fullWidth
                        sx={{ marginBottom: "10px" }}
                      />
                    </Box>
                    <Box>
                      <Typography>Número de Ruc</Typography>
                      <TextField
                        type="text"
                        className="form-control"
                        id="numero_ruc"
                        name="numero_ruc"
                        defaultValue=" "
                        variant="standard"
                        fullWidth
                        sx={{ marginBottom: "10px" }}
                      />
                    </Box>
                    <Box>
                      <Typography>Persona de Contacto</Typography>
                      <TextField
                        type="text"
                        className="form-control"
                        id="persona_contacto"
                        name="persona_contacto"
                        defaultValue=" "
                        variant="standard"
                        fullWidth
                        sx={{ marginBottom: "10px" }}
                      />
                    </Box>
                    <Box>
                      <Typography>Motivo</Typography>
                      <TextField
                        type="text"
                        className="form-control"
                        id="motivo"
                        name="motivo"
                        defaultValue=" "
                        variant="standard"
                        fullWidth
                        sx={{ marginBottom: "10px" }}
                      />
                    </Box>
                    <Box>
                      <Typography>Celular</Typography>
                      <TextField
                        type="text"
                        className="form-control"
                        id="celular"
                        name="celular"
                        defaultValue=" "
                        variant="standard"
                        fullWidth
                        sx={{ marginBottom: "10px" }}
                      />
                    </Box>
                    <Box>
                      <Typography>Correo</Typography>
                      <TextField
                        type="text"
                        className="form-control"
                        id="correo"
                        name="correo"
                        defaultValue=""
                        variant="standard"
                        fullWidth
                        sx={{ marginBottom: "10px" }}
                      />
                    </Box>
                    <Box>
                      <Typography>Mensaje</Typography>
                      <TextField
                        multiline
                        maxRows={4}
                        className="form-control"
                        id="mensaje"
                        name="mensaje"
                        defaultValue=" "
                        fullWidth
                        variant="outlined"
                      />
                    </Box>
                  </div>
                  <Box textAlign={"center"} marginTop="15px">
                    <Button
                      variant="contained"
                      className="ButtonEnviarContacto"
                      type="submit"
                      color="primary"
                    >
                      Enviar
                    </Button>

                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ paddingTop: "50px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <Box className="ContenedorTittleGoogleMaps">
                  <Typography className="TittleGooglemaps">Base Transmdicas</Typography>
                </Box>
                <div style={{ width: "100%" }}>
                  <iframe
                    width="100%"
                    height="300"
                    frameBorder="0"
                    scrolling="no"
                    src="https://maps.google.com/maps?width=600&amp;height=300&amp;hl=es&amp;q=Arequipa,Peru,Transmdicas+(Transmdicas)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                    <a href="https://www.gps.ie/car-satnav-gps/">Base Transmdicas</a>
                  </iframe>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Box className="ContenedorTittleGoogleMaps">
                  <Typography className="TittleGooglemaps">Oficinas Transmdicas</Typography>
                </Box>
                <div style={{ width: "100%" }}>
                  <iframe
                    width="100%"
                    height="300"
                    frameBorder="0"
                    scrolling="no"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.1190222249191!2d-71.58139174583442!3d-16.349692544595367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9142361ae23d2269%3A0xbe0d473359128c8d!2sEstaci%C3%B3n%20de%20Servicios%20San%20Jos%C3%A9%20Espinar%20Cusco-PRIMAX!5e0!3m2!1ses-419!2spe!4v1664330463490!5m2!1ses-419!2spe"
                  >
                    <a href="https://www.gps.ie/sport-gps/">Oficinas Transmdicas</a>
                  </iframe>
                </div>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
