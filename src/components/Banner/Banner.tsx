import "../../utils/styles/Banner/BannerStyles.scss"
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import poster1 from '../../utils/img/Home/Banner/Carrusel1.jpg'
import Cards from '../Cards/Cards';
import zIndex from "@mui/material/styles/zIndex";



const BannerHome = () => {
   
    return (
        <Box  className="contenedorBannerTotal" >
    
                <Box className='poster1'><img src={poster1} alt="" /></Box>
                <Box className='contenedor'>
                    <Box className="contenidoPoster" >
                        <Typography className='titleposter' component="div" >
                            Transporte por Carretera de materiales peligrosos y carga en general
                        </Typography>
                       {/*  <Typography className="textdescriptionposter">  
                            
                        </Typography> */}
                      {/*   <Box>
                            <Button>Contactanos</Button>
                        </Box> */}
                    </Box>
                    <Cards/>
                </Box>
            
        </Box>
    )
}

export default BannerHome