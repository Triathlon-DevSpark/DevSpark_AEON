import { Box, Typography } from "@mui/material";
import BottomCircle from "../components/BottomCircle";
import bioGlobeAnim from "../resources/bioglobe-video.mp4";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BioLoginPage() {
    // navigate to login page after 5 seconds
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/home")
        }, 5000);
    }, [])

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
            }}
        >
            <video src={bioGlobeAnim} autoPlay muted loop style={{ marginBottom: "8rem" }}></video>

            <Box
                sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    left: "0",
                    margin: "auto",
                    marginBottom: "5rem"
                }}>
                <Typography
                    variant="p"
                    component="p"
                    textAlign="center"
                    marginBottom="5rem">
                    Please wait until we connect with your <br />
                    BioGlobe ID
                </Typography>
                <Typography
                    variant="h3"
                    component="h3"
                    textAlign="center">
                    Authenticating
                </Typography>
            </Box>
            <BottomCircle distanceFromBottom={-360} />
        </Box>
    )
}
