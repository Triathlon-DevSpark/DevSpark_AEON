import { Box, Typography } from "@mui/material";
import BottomCircle from "../components/BottomCircle";

export default function BioLoginPage() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Typography
                variant="p"
                component="p"
                textAlign="center"
                marginBottom="5rem">
                Please wait until we connect with your <br />
                BioGlobe ID
            </Typography>
            <Typography
                variant="h4"
                component="h3"
                textAlign="center"
                fontWeight="bold">
                Authenticating
            </Typography>
            <BottomCircle distanceFromBottom={-360} />
        </Box>
    )
}
