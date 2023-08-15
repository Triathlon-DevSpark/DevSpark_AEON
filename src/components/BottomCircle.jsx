import { Box } from "@mui/material"

export default function BottomCircle({ distanceFromBottom }) {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: distanceFromBottom,
                left: "0",
                right: "0",
                margin: "0 auto",
                width: '369px',
                height: '369px',
                borderRadius: '50%',
                backgroundColor: 'primary.main',
                zIndex: '10',
                filter: "blur(110px)"
            }}
        />
    )
}
