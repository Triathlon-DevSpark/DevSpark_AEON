import { Box } from "@mui/system";
import BottomNavbar from "../components/BottomNavbar";
import BottomCircle from "../components/BottomCircle";
import RevolvingGalaxy from "../components/RevolvingGalaxy";

export default function HomePage() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            {/* Props */}
            <RevolvingGalaxy />
            <BottomNavbar />
            <BottomCircle distanceFromBottom={-360} />

            {/* Page related components */}
        </Box>
    )
}
