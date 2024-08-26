import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar";

const Layout = () => {
	return (
		<Box sx={{ width: "100vw", height: "100vh", position: "relative" }}>
			<CssBaseline />
			<Sidebar />
			<Navbar />
			<Box
				sx={{
					pl: { md: "250px", xs: "60px" },
					pr: "20px",
					pt: "70px",
					width: "100%",
					height: "100%",
					overflowY: "auto",
				}}
			>
				<Outlet />
			</Box>
		</Box>
	);
};

export default Layout;
