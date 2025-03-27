import { Box } from "@mui/material";
import HeaderComponent from "../home/HeaderComponent";
import ButtonHomeComponent from "../home/ButtonHomeComponent";
import CardServicesComponent from "./CardServicesComponent";
const ServiciosComponent = () => {
    return (
        <Box sx={{ minHeight: 'calc(100vh - 235px)', display: 'flex', flexDirection: 'column' }}>
            <HeaderComponent />
            <ButtonHomeComponent />
            <CardServicesComponent />
        </Box>
    );
}

export default ServiciosComponent;