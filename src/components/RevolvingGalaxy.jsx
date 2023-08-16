import { Box } from "@mui/system"
import galaxy from "../resources/home-galaxy-loop.gif"

export default function RevolvingGalaxy() {
    return (
        <Box>
            <Box
                sx={{
                    display: {
                        xs: "block",
                        sm: "none"
                    }
                }}>
                <img
                    src={galaxy}
                    alt="revolving-galaxy"
                    style={{
                        position: 'fixed',
                        top: "-10vh",
                        left: "50vw",
                        width: '539.8px',
                        height: '504.42px',
                        zIndex: '-10',
                        rotate: "-146.85deg"
                    }}
                />
            </Box>

            <Box
                sx={{
                    display: {
                        xs: "none",
                        sm: "block"
                    }
                }}>
                <img
                    src={galaxy}
                    alt="revolving-galaxy"
                    style={{
                        position: 'fixed',
                        top: "-50vh",
                        left: "55vw",
                        width: '1079.6px',
                        height: '1008.8px',
                        zIndex: '-10',
                        rotate: "-146.85deg",
                    }}
                />
            </Box>
        </Box>
    )
}
