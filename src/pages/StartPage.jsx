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
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem"
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

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    bgcolor: "blackLight.main",
                    padding: "2rem",
                    borderRadius: "0.5rem",
                    maxWidth: "25rem",
                    border: "2px solid var(--primary)"
                }}
            >
                <Button sx={{ width: "10rem" }} variant="contained">primary</Button>
                <Button sx={{ width: "10rem" }} variant="contained" color="secondary">secondary</Button>
                <Button sx={{ width: "10rem", color: "black.main" }} variant="contained" color="secondaryLight">secondaryLight</Button>
                <Button sx={{ width: "10rem", color: "primary.main" }} variant="contained" color="secondaryDark">secondaryDark</Button>
                <Button sx={{ width: "10rem" }} variant="outlined">primary</Button>
                <Button sx={{ width: "10rem" }} variant="outlined" color="secondary">secondary</Button>
                <Button sx={{ width: "10rem" }} variant="outlined" color="secondaryLight">secondaryLight</Button>
                <Button sx={{ width: "10rem", color: "primary.main" }} variant="outlined" color="secondaryDark">secondaryDark</Button>
            </Box>
        </Box>
    )
}
