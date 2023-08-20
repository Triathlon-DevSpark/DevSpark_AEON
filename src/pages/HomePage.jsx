import { Box } from "@mui/system";
import BottomNavbar from "../components/BottomNavbar";
import BottomCircle from "../components/BottomCircle";
import RevolvingGalaxy from "../components/RevolvingGalaxy";
import { Stack, Typography, InputBase, Card, Divider } from "@mui/material";
import earth from "../resources/earth-globe-loop.gif";
import SearchIcon from "@mui/icons-material/Search";
import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/planet";
import { Diversity1, Groups, Height, NearMe } from "@mui/icons-material";
import EarthImage from "../resources/planets/earth-planet.png";
import MarsImage from "../resources/planets/mars-planet.png";
import { useNavigate } from "react-router-dom";

export default function HomePage({ setInfoToPlanet }) {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const today = new Date().getDate();
  const navigate = useNavigate();

  function searchPackage(e) {
    e.preventDefault();
    console.log(e.target.sample.value);
  }

  const packages = [
    {
      planetName: "Earth",
      planetImage: EarthImage,
      planetColor: "#0000FF",
      planetProperties: {
        // The source root location of the texture should be given for threejs to work
        planetMap: "/globe-textures/2k_earth_daymap.jpg",
        planetNormalMap: "/globe-textures/2k_earth_normal_map.jpg",
        planetCloudsMap: "/globe-textures/2k_earth_clouds.jpg",
        planetSpecularMap: "/globe-textures/2k_earth_specular_map.jpg",
      },
      planetLocation: "Milky Way Galaxy",
      distanceFromEarth: "225M KM",
      planetPopulation: "50K",
    },
    {
      planetName: "Mars",
      planetImage: MarsImage,
      planetColor: "#FF2700",
      planetProperties: {
        planetMap: "/globe-textures/2k_venus_surface.jpg",
        planetNormalMap: "",
        planetCloudsMap: "",
        planetSpecularMap: "",
      },
      planetLocation: "Milky Way Galaxy",
      distanceFromEarth: "225M KM",
      planetPopulation: "50K",
    },
  ];

  const callPlanet = (planet) => {
    // set planet info
    setInfoToPlanet(planet)

    // navigate to planet route
    navigate("/planetinfo")
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 1rem",
        marginBottom: "10rem",
      }}
    >
      {/* Props */}
      <RevolvingGalaxy />
      <BottomNavbar />
      <BottomCircle distanceFromBottom={-360} />

      {/* Page related components */}
      {/* USER DETAILS */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          gap: "0.5rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "dm-sans",
            fontWeight: "bold",
          }}
        >
          Hello Aston!
        </Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="p">{today}</Typography>
          <Typography variant="span">●</Typography>
          <Typography variant="p">{month}</Typography>
          <Typography variant="span">●</Typography>
          <Typography variant="p">{year + 200}</Typography>
        </Stack>

        <Stack direction="row" spacing={0.5}>
          <img
            src={earth}
            alt="eath-image"
            style={{
              width: "2.5rem",
              height: "1rem",
              borderRadius: "100px",
              border: "1px solid var(--secondary)",
              objectFit: "cover",
            }}
          />
          <Typography variant="p">Earth</Typography>
        </Stack>
      </Box>

      {/* SEARCH BAR */}
      <Box
        component="form"
        onSubmit={(e) => {
          searchPackage(e);
        }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "blackLight.main",
          padding: "0.5rem 1rem",
          borderRadius: "1rem",
          border: "1px solid var(--secondary)",
        }}
      >
        <InputBase
          id="sample"
          placeholder="Search Planets"
          sx={{ width: "100%" }}
        />

        <SearchIcon color="secondary" />
      </Box>

      {/* RECOMMENDED FOR YOU */}
      <Box>
        <Typography variant="h4">Recommended For You</Typography>

        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            overflowX: "scroll",
          }}
        >
          {packages.map((planet, index) => {
            return (
              <Card
                key={index}
                sx={{
                  width: "15rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  borderRadius: "0.5rem",
                  // linear gradient background for each planet
                  backgroundImage: `linear-gradient(180deg, black 30%, ${planet.planetColor} 70%)`,
                  flex: "0 0 auto",
                }}
                onClick={() => { callPlanet(planet) }}
              >
                <Box
                  style={{
                    width: "fit-content",
                    height: "12rem",
                  }}
                >
                  <img
                    src={planet.planetImage}
                    style={{
                      width: "300px",
                      height: "auto",
                      objectPosition: "0 -6rem",
                      WebkitFilter: "drop-shadow(10px 10px 10px #000)",
                      filter: "drop-shadow(10px 10px 10px #000)",
                    }}
                    alt="planet-image"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Typography variant="h2">{planet.planetName}</Typography>
                  <Typography variant="p">{planet.planetLocation}</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <NearMe />
                      <Typography variant="p">{planet.distanceFromEarth}</Typography>
                    </Stack>

                    <Typography variant="p">From Earth</Typography>
                  </Box>

                  <Divider
                    sx={{ bgcolor: "secondary.main" }}
                    orientation="vertical"
                    flexItem
                  />

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Groups />
                      <Typography variant="p">{planet.planetPopulation}</Typography>
                    </Stack>

                    <Typography variant="p">Population</Typography>
                  </Box>
                </Box>
              </Card>
            );
          })}
        </Box>
      </Box>

      {/* RECENT JOURNEY */}
      <Box>
        <Typography variant="h4">Recent Journey</Typography>
        <Card
          sx={{
            marginTop: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.5rem 1rem",
            gap: "1rem",
            borderRadius: "0.5rem",
            // linear gradient background for each planet
            backgroundImage: `linear-gradient(180deg, #5115B2 0%, var(--secondary-dark) 100%)`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              width: "10rem",
              height: "15rem",
              gap: "5rem"
            }}>
            <Box>
              <img
                src={MarsImage}
                alt="planet-1"
                style={{
                  width: "5rem",
                  position: "absolute",
                  top: "0",
                  right: "0",
                  left: "0",
                  margin: "0 auto"
                }}
              />
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
                  position: "absolute",
                  top: "2rem",
                  right: "0",
                  left: "0",
                  margin: "0 auto"
                }}>Mars</Typography>
            </Box>

            <Height
              fontSize="large"
              sx={{
                margin: "1rem 0"
              }} />

            <Box sx={{
              height: "5rem"
            }}>
              <img
                src={EarthImage}
                alt="planet-2"
                style={{
                  width: "5rem",
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  left: "0",
                  margin: "0 auto"
                }}
              />
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
                  position: "absolute",
                  bottom: "2rem",
                  right: "0",
                  left: "0",
                  margin: "0 auto"
                }}>Earth</Typography>
            </Box>
          </Box>

          <Divider
            sx={{ bgcolor: "secondary.main" }}
            orientation="vertical"
            flexItem
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <Typography variant="p">Distance: 1.5LY</Typography>
              <Typography variant="p">Travel Mode: ion propulsion</Typography>
              <Typography variant="p">Cost: 2000 SPC</Typography>
            </Box>

            <Box>xAOWREx2 13034x</Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
