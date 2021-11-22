import * as React from "react";
import { Container, Typography } from "@mui/material";

function LandingPage() {
    return (
        <Container
            component="main"
            maxWidth="xl"
            disableGutters>
            <Typography component="h1" color="inherit">
                Chronomoney
            </Typography>
        </Container>
    )
}

export default LandingPage;