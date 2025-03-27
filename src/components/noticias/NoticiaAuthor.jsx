import { Typography } from '@mui/material';
import LazyLoadWrapper from '../shared/wrappers/LazyLoadWrapper';
import NoticiasAuthorComponent from './NoticiasAuthorComponent';

const NoticiaAuthor = ({ noticia, lastUpdated }) => {
    return (
        <LazyLoadWrapper>
            <NoticiasAuthorComponent lastUpdated={lastUpdated} />
            {/* <AuthorSocialNetworks socialNetworks={noticia.author?.socialNetworks} /> */}
            <Typography>{noticia.author?.bio}</Typography>
        </LazyLoadWrapper>
    );
};

export default NoticiaAuthor;
