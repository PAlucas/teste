import React from 'react'

import { Container, Box, Grid, Link } from '@mui/material'

export const RodapeEcommerce = () => {  

    return (
        <footer>
            <Box 
              px={{ xs:3, sm:10}} 
              py={{ xs:5, sm:10}}
              bgcolor="text.secondary" 
              color="white">
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                Ajuda
                            </Box>

                            <Box>
                                <Link href="/" color="inherit">Contato</Link>
                            </Box>

                            <Box>
                                <Link href="/" color="inherit">Suporte</Link>
                            </Box>

                            <Box>
                                <Link href="/" color="inherit">Contato</Link>
                            </Box>

                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                Ajuda
                            </Box>

                            <Box>
                                <Link href="/" color="inherit">Contato</Link>
                            </Box>

                            <Box>
                                <Link href="/" color="inherit">Suporte</Link>
                            </Box>

                            <Box>
                                <Link href="/" color="inherit">Contato</Link>
                            </Box>

                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                Ajuda
                            </Box>

                            <Box>
                                <Link href="/" color="inherit">Contato</Link>
                            </Box>

                            <Box>
                                <Link href="/" color="inherit">Suporte</Link>
                            </Box>

                            <Box>
                                <Link href="/" color="inherit">Contato</Link>
                            </Box>

                        </Grid>
                    </Grid>

                    <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 0}}>
                        RJ Consultores - Nova Venda WEB
                    </Box>
                    
                </Container>
            </Box>
        </footer>
    )
}
