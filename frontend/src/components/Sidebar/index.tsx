import React from "react";
import {
    Apps,
    GridView,
    Home,
    Logout,
    Newspaper,
    Notifications,
    People,
    PieChart,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Sidebar = () => {
	const navLinks = [
		{
			title: "Home",
			icon: <Home sx={{ color: "#555", fontSize: 22 }} />,
			active: false,
		},
		{
			title: "Boards",
			icon: <Apps sx={{ color: "#555", fontSize: 22 }} />,
			active: true,
		},
		{
			title: "Projects",
			icon: <GridView sx={{ color: "#555", fontSize: 22 }} />,
			active: false,
		},
		{
			title: "Analytics",
			icon: <PieChart sx={{ color: "#555", fontSize: 22 }} />,
			active: false,
		},
		{
			title: "Workflows",
			icon: <People sx={{ color: "#555", fontSize: 22 }} />,
			active: false,
		},
		{
			title: "Notifications",
			icon: <Notifications sx={{ color: "#555", fontSize: 22 }} />,
			active: false,
		},
		{
			title: "Newsletter",
			icon: <Newspaper sx={{ color: "#555", fontSize: 22 }} />,
			active: false,
		},
	];

	return (
		<Box
			sx={{
				position: "fixed",
				left: 0,
				top: 0,
				width: { md: "230px", xs: "60px" },
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				backgroundColor: "#fff",
				overflow: "hidden",
				borderRight: 1,
				borderColor: "#f3f4f6",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: { md: "flex-start", xs: "center" },
					px: { md: 2, xs: 0 },
					height: "70px",
					bgcolor: "#fff",
				}}
			>
				<Typography
					variant="h6"
					sx={{
						color: "#fb923c",
						fontWeight
            : "bold",  //bold can't work
						display: { md: "block", xs: "none" },
					}}
				>
					ToDoApp :0
				</Typography>
				<Typography
					variant="h6"
					sx={{
						color: "#fb923c",
						fontWeight: "bold",   //bold can't work
						display: { md: "none", xs: "block" },
					}}
				>
					L.
				</Typography>
			</Box>
			<Box
				sx={{
					flex: 1,
					py: 2,
					px: { md: 2, xs: 1 },
					display: "flex",
					flexDirection: "column",
					gap: 2,
					backgroundColor: "#fff",
				}}
			>
				{navLinks.map((link) => (
					<Box
						key={link.title}
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 2,
							width: "100%",
							borderRadius: 1,
							bgcolor: link.active ? "#fb923c" : "transparent",
							cursor: "pointer",
							px: 2,
							py: 1,
							"&:hover": {
								bgcolor: "#fb923c",
							},
						}}
					>
						{link.icon}
						<Typography
							sx={{
								fontSize: "15px",
								fontWeight: "medium",
								display: { md: "block", xs: "none" },
							}}
						>
							{link.title}
						</Typography>
					</Box>
				))}
				<Box
					sx={{
						position: "absolute",
						bottom: 16,
						display: "flex",
						alignItems: "center",
						justifyContent: { md: "flex-start", xs: "center" },
						gap: 2,
						width: { md: "90%", xs: "70%" },
						borderRadius: 1,
						bgcolor: "#f3f4f6",
						cursor: "pointer",
						px: 2,
						py: 1,
						"&:hover": {
							bgcolor: "#fb923c",
						},
					}}
				>
					<Logout sx={{ color: "#555", fontSize: 22 }} />
					<Typography
						sx={{
							fontSize: "15px",
							fontWeight: "medium",
							display: { md: "block", xs: "none" },
						}}
					>
						Log Out
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Sidebar;
