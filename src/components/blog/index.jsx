import { Box } from '@mui/material';
import HeaderComponent from '../home/HeaderComponent';
import ButtonHomeComponent from '../home/ButtonHomeComponent';

const BlogComponent = ({ noticias }) => {

    return (
        <Box sx={{ minHeight: 'calc(100vh - 235px)', display: 'flex', flexDirection: 'column' }}>
            <HeaderComponent />
            <ButtonHomeComponent />
            {noticias.map((noticia) => (
                <BlogCard key={noticia.id} noticia={noticia} />
            ))}
        </Box>
    );
};

export default BlogComponent;
