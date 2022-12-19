import React from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
import App from "../App";
import { fontSize } from "@mui/system";
export const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitronic
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Build a better <br/> You
      </Typography>
      <Typography fontSize="18px" lineHeight="40px" mb={4}>
        Check the one which suites you
      </Typography>
      <Button
        variant="contained"
        color="success"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px 20px", borderRadius:"20px" }}
      >
        Explore Exercise
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img"></img>
    </Box>
  );
};
export default HeroBanner;
