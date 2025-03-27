import { Box } from "@mui/material";
import HeaderComponent from "../home/HeaderComponent";
import ButtonHomeComponent from "../home/ButtonHomeComponent";
import FormularioComponent from "./FormularioComponent";
import OurContactComponent from "./OurContactComponent";

const ContactComponent = () => {
    return (<Box sx={{ minHeight: 'calc(100vh - 235px)', display: 'flex', flexDirection: 'column' }}>
        <HeaderComponent />
        <ButtonHomeComponent />
        <FormularioComponent />
        <OurContactComponent />
    </Box >);
};

export default ContactComponent;
