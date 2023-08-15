import {
    Box,
    Stack,
    Typography,
} from "@mui/material"

import planetBackground from "../resources/planetBG.jpg"
import mainLogo from "../resources/AEON-logo.png"
import { KeyboardDoubleArrowUp } from "@mui/icons-material"

export default function Startpage() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundImage: `url(${planetBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: {
                    xs: "contain",
                    sm: "cover",
                },
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "13rem"
                }}>
                <img src={mainLogo} alt="main-logo" />
                <Stack direction="row" spacing={0.5}>
                    <Typography variant="p">Space</Typography>
                    <Typography variant="span">●</Typography>
                    <Typography variant="p">Time</Typography>
                    <Typography variant="span">●</Typography>
                    <Typography variant="p">Fusion</Typography>
                </Stack>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "10rem"
                }}>
                <KeyboardDoubleArrowUp />
                <Typography variant="h4" fontWeight="bold">
                    Swipe up to Get started
                </Typography>
            </Box>
        </Box>
    )
}
