'use client';

import { useState } from 'react';
import {
    Grid,
    TextField,
    Checkbox,
    Button,
    FormControlLabel,
    Typography,
    Paper,
    Link
} from '@mui/material';

const FormularioComponent = () => {
    const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

    return (
        <Paper
            elevation={4}
            sx={{
                p: 4,
                mb: 6,
                borderRadius: '12px',
            }}
        >
            <Grid container spacing={3}>
                <Grid xs={12} sm={6}>
                    <TextField fullWidth label="Nombre" required />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField fullWidth label="Teléfono" />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField fullWidth label="Email" type="email" required />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField fullWidth label="Sitio web (si tienes)" />
                </Grid>
                <Grid xs={12}>
                    <TextField
                        fullWidth
                        label="Cuéntanos tu proyecto o lo que necesitas"
                        multiline
                        rows={5}
                    />
                </Grid>
                <Grid xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={acceptedPrivacy}
                                onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                            />
                        }
                        label={
                            <Typography variant="body2">
                                Acepto la{' '}
                                <Link href="/politica-privacidad" target="_blank" color="primary">
                                    política de privacidad
                                </Link>
                            </Typography>
                        }
                    />
                </Grid>
                <Grid xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={!acceptedPrivacy}
                    >
                        Enviar
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default FormularioComponent;
