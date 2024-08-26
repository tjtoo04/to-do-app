/* eslint-disable @typescript-eslint/no-explicit-any */
import { AccessTime } from "@mui/icons-material";
import { Box, Card, CardContent, Typography, Chip, Divider } from "@mui/material";
import { TaskT } from "../../types";

interface TaskProps {
	task: TaskT;
	provided: any;
}

const Task = ({ task, provided }: TaskProps) => {
	const { title, description, priority, deadline, image, alt, tags } = task;

	return (
		<Card
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			sx={{
				cursor: "grab",
				bgcolor: "#fff",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				gap: 2,
				boxShadow: 1,
				borderRadius: 2,
				p: 2,
				width: "100%",
			}}
		>
			<CardContent>
				{image && alt && (
					<Box
						component="img"
						src={image}
						alt={alt}
						sx={{
							width: "100%",
							height: 170,
							borderRadius: 2,
							objectFit: "cover",
							mb: 2,
						}}
					/>
				)}
				<Box sx={{ display: "flex", gap: 1, mb: 2 }}>
					{tags.map((tag) => (
						<Chip
							key={tag.title}
							label={tag.title}
							sx={{
								bgcolor: tag.bg,
								color: tag.text,
								fontSize: 13,
								fontWeight: "medium",
							}}
							size="small"
						/>
					))}
				</Box>
				<Box sx={{ mb: 2 }}>
					<Typography variant="h6" sx={{ fontSize: 15.5, color: "#555" }}>
						{title}
					</Typography>
					<Typography variant="body2" sx={{ fontSize: 13.5, color: "gray" }}>
						{description}
					</Typography>
				</Box>
				<Divider sx={{ my: 2 }} />
				<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
					<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
						<AccessTime sx={{ color: "#666", fontSize: 19 }} />
						<Typography variant="body2" sx={{ fontSize: 13, color: "gray" }}>
							{deadline} mins
						</Typography>
					</Box>
					<Box
						sx={{
							width: 60,
							borderRadius: 2,
							height: 5,
							bgcolor:
								priority === "high"
									? "red"
									: priority === "medium"
									? "orange"
									: "blue",
						}}
					/>
				</Box>
			</CardContent>
		</Card>
	);
};

export default Task;
