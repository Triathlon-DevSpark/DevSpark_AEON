import { Typography, Button } from "@mui/material"
import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/planet";
import { IosShare, NavigateBefore, FavoriteOutlined, FavoriteBorder, ViewInAr } from "@mui/icons-material";
import MarsImage from "../resources/planets/mars-planet.png";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import Box from "@mui/material/Box";

const planetInfo = {
    planetName: "Mars",
    planetImage: MarsImage,
    planetColor: "#0000FF",
    planetProperties: {
        planetMap: "/globe-textures/2k_mars.jpg"
    },
    planetLocation: "Milky Way Galaxy",
    distanceFromEarth: "225M KM",
    planetPopulation: "50K",
}

// export default function PlanetInfo({ planetInfo }) {
export default function PlanetInfo() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function CustomTabPanel({ children }) {
        return (
            <Box>
                <Typography>{children}</Typography>
            </Box>
        );
    }

    // const userSchema = new mongoose.Schema({
    //     travelID: String,
    //     userName: String,
    //     userLocation: String,
    //     userDestination: [{ type: mongoose.Schema.Types.ObjectId, ref: "Planet" }],
    //     departureDate: Date,
    //     returnDate: Date,
    //     numberOfPassengers: Number,
    //     travelMode: String,
    //   });

    function doBooking() {
        // simulate a booking
        const booking = {
            travelID: "123456789",
            userName: "John Doe",
            userLocation: "Mars",
            departureDate: "2023-10-10",
            returnDate: "2023-10-20",
            numberOfPassengers: 1,
            travelMode: "SpaceX"
        }

        // do the DB post call using fetch
        fetch("http://localhost:8080/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(booking),
        }).then((response) => {
            // log if successful
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })

    }

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: "3rem",
                    gap: "10rem"
                }}>
                <Button>
                    <NavigateBefore
                        fontSize="medium"
                        color="secondaryLight"
                        sx={{
                            bgcolor: "blackLight.main",
                            borderRadius: "100%",
                            border: "0.5px solid var(--secondary)",
                            padding: "0.5rem"
                        }}
                    />
                </Button>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1rem"
                    }}>
                    <Button>
                        <IosShare
                            fontSize="medium"
                            color="secondaryLight"
                            sx={{
                                bgcolor: "blackLight.main",
                                borderRadius: "100%",
                                border: "0.5px solid var(--secondary)",
                                padding: "0.5rem",
                            }}
                        />
                    </Button>

                    <Button>
                        <FavoriteBorder
                            fontSize="medium"
                            color="secondaryLight"
                            sx={{
                                bgcolor: "blackLight.main",
                                borderRadius: "100%",
                                border: "0.5px solid var(--secondary)",
                                padding: "0.5rem"
                            }}
                        />
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    diplay: "flex",
                    flexDirection: "column",
                    margin: "0 1rem"
                }}>
                <Typography variant="h2">
                    Mars
                </Typography>
                <Typography variant="p">
                    Terrestrial Planet
                </Typography>
            </Box>
            <Canvas
                style={{
                    height: "20rem"
                }}>
                <Planet planetProperties={planetInfo.planetProperties} />
            </Canvas>

            <Box sx={{
                display: "flex",
                justifyContent: "space-around",
            }}>
                <Box
                    sx={{
                        diplay: "flex",
                        flexDirection: "column"
                    }}>
                    <Typography variant="p">
                        Distance from Earth
                    </Typography>
                    <Typography variant="h3">
                        2.55 EARTH YEARS
                    </Typography>
                </Box>

                <Button>
                    <ViewInAr
                        fontSize="medium"
                        color="secondaryLight"
                        sx={{
                            bgcolor: "blackLight.main",
                            borderRadius: "100%",
                            border: "0.5px solid var(--secondary)",
                            padding: "0.5rem",
                        }}
                    />
                </Button>
            </Box>

            <Box>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Item One" value={0} />
                        <Tab label="Item Two" value={1} />
                        <Tab label="Item Three" value={2} />
                    </Tabs>
                </Box>

                {console.log(alert)}

                {value === 0 &&
                    <CustomTabPanel>Item One</CustomTabPanel>
                }

                {value === 1 &&
                    <CustomTabPanel>Item One</CustomTabPanel>
                }

                {value === 2 &&
                    <CustomTabPanel>Item One</CustomTabPanel>
                }
            </Box>
            <Button
                sx={{
                    width: "100%",
                    borderRadius: "0.5rem"
                }}
                variant="outlined" color="primary"
                onClick={() => { doBooking() }}>Book to Mars</Button>
        </Box>
    )
}
