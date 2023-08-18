import { Box } from "@mui/system";
import BottomNavbar from "../components/BottomNavbar";
import BottomCircle from "../components/BottomCircle";
import RevolvingGalaxy from "../components/RevolvingGalaxy";
import { Stack, Typography, InputBase, Card, Divider } from "@mui/material";
import earth from "../resources/earth-globe-loop.gif";
import SearchIcon from "@mui/icons-material/Search";
import { Canvas } from "@react-three/fiber";
import { Diversity1, Groups, NearMe } from "@mui/icons-material";
import { Planet } from "../components/planet";

export default function HomePage() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const today = new Date().getDate();

  function searchPackage(e) {
    e.preventDefault();
    console.log(e.target.sample.value);
  }

  // Dummy data for packages
  const packages = [
    {
      planetName: "Earth",
      planetImage: "/src/resources/planets/earth-planet.png",
      planetColor: "#0000FF",
      planetProperties: {
        // The source root location of the texture should be given for threejs to work
        planetMap: "/src/resources/globe-textures/2k_earth_daymap.jpg",
        planetNormalMap:
          "/src/resources/globe-textures/2k_earth_normal_map.jpg",
        planetCloudsMap: "/src/resources/globe-textures/2k_earth_clouds.jpg",
        planetSpecularMap:
          "/src/resources/globe-textures/2k_earth_specular_map.jpg",
      },
      planetLocation: "Milky Way Galaxy",
      distanceFromEarth: "225M KM",
      planetPopulation: "50K",
    },
    {
      planetName: "Mars",
      planetImage: "/src/resources/planets/mars-planet.png",
      planetColor: "#FF2700",
      planetProperties: {
        planetMap: "/src/resources/globe-textures/2k_venus_surface.jpg",
        planetNormalMap: "",
        planetCloudsMap: "",
        planetSpecularMap: "",
      },
      planetLocation: "Milky Way Galaxy",
      distanceFromEarth: "225M KM",
      planetPopulation: "50K",
    },
  ];

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
          <Box>Auralia to Earth component</Box>

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

            <Box>Ticket Image</Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
