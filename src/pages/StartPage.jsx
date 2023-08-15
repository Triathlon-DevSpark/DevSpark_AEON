import {
    Box,
    Button,
    Typography,
} from "@mui/material"

export default function Startpage() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2rem",
                    bgcolor: "secondary.main",
                    padding: "2rem",
                    borderRadius: "0.5rem"
                }}
            >
                <Typography
                    variant="h1"
                    component="h1"
                    color="secondaryLight.main"
                >
                    Welcome to DevSpark
                    <Typography
                        variant="span"
                        component="span"
                        color="primary"
                    > AEON </Typography>
                </Typography>
                <Button variant="contained">=)</Button>
            </Box>
        </Box>
    )
}
