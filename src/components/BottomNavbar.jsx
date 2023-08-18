import Box from '@mui/material/Box';
import { useState } from "react"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { ExploreOutlined, FilterNoneOutlined, HomeOutlined, Person4Outlined } from '@mui/icons-material';

export default function BottomNavbar() {
    const [value, setValue] = useState(0);

    return (
        <Box component="nav">
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    padding: "0.5rem",
                    borderRadius: "1rem",
                    bgcolor: "#00000050",
                    position: "fixed",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    margin: "0 auto",
                    marginBottom: "2rem",
                    width: "fit-content",
                    zIndex: "100",
                    display: "flex",
                    flexWrap: {
                        xs: "nowrap",
                        sm: "wrap"
                    },
                    border: "1px solid #1a2407"
                }}
            >

                <BottomNavigationAction LinkComponent="a" href="#" label="Home" icon={<HomeOutlined />} />
                <BottomNavigationAction LinkComponent="a" href="#" label="Packages" icon={<ExploreOutlined />} />
                <BottomNavigationAction LinkComponent="a" href="#" label="Compare" icon={<FilterNoneOutlined />} />
                <BottomNavigationAction LinkComponent="a" href="#" label="Profile" icon={<Person4Outlined />} />
            </BottomNavigation>
        </Box>
    )
}