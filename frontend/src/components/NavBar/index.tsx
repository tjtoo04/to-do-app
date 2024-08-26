import React from "react";
import {
  ExpandMore,
  NotificationsOutlined,
  AccountCircle,
  SearchOutlined,
  SettingsOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, InputBase } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        width: { md: "calc(100%-230px)", xs: "calc(100%-60px)" },
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        pl: 2,
        pr: 6,
        height: "70px",
        top: 0,
        left: { md: "230px", xs: "60px" },
        borderBottom: "1px solid",
        borderColor: "#d1d5db",
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
        }}
      >
        <AccountCircle sx={{ color: "#fb923c", width: 28, height: 28 }} />
        <Box
          component="span"
          sx={{
            color: "#fb923c",
            fontWeight: "bold", //bold can't work 
            fontSize: { md: "1rem", xs: "0.875rem" },
            whiteSpace: "nowrap",
          }}
        >
          Board Name
        </Box>
        <ExpandMore sx={{ color: "#fb923c", width: 16, height: 16 }} />
      </Box>
      <Box
        sx={{
          width: { md: 800, xs: 130 },
          bgcolor: "#f3f4f6",
          borderRadius: "8px",
          px: 2,
          py: "10px",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <SearchOutlined sx={{ color: "#999" }} />
        <InputBase
          placeholder="Search"
          sx={{
            width: "100%",
            bgcolor: "#f3f4f6",
            outline: "none",
            fontSize: "15px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            bgcolor: "f3f4f6",
            borderRadius: "50%",
            p: 1,
            cursor: "pointer",
          }}
        >
          <ShareOutlined sx={{ color: "#444" }} />
        </Box>
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            bgcolor: "f3f4f6",
            borderRadius: "50%",
            p: 1,
            cursor: "pointer",
          }}
        >
          <SettingsOutlined sx={{ color: "#444" }} />
        </Box>
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            bgcolor: "f3f4f6",
            borderRadius: "50%",
            p: 1,
            cursor: "pointer",
          }}
        >
          <NotificationsOutlined sx={{ color: "#444" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
