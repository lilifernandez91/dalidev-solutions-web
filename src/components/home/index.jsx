import { Box } from '@mui/material';
import ButtonHomeComponent from './ButtonHomeComponent';
import HeaderComponent from './HeaderComponent';
import OurClientsComponent from './OurClientsComponent';
import TextHomeComponent from './TextHomeComponent';

const HomeComponent = () => {
    return (
        <Box sx={{ minHeight: 'calc(100vh - 235px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <HeaderComponent />
            <ButtonHomeComponent />
            <TextHomeComponent />
            <OurClientsComponent />
        </Box>
    );
};

export default HomeComponent;
