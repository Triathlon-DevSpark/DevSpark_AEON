import {
    Box,
    Stack,
    Typography,
} from "@mui/material"

import planetBackground from "../resources/planetBG.jpg"
import mainLogo from "../resources/AEON-logo.png"
import { KeyboardDoubleArrowUp } from "@mui/icons-material"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Startpage() {
    // navigate to login page after 5 seconds
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/login")
        }, 5000);
    }, [])

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
