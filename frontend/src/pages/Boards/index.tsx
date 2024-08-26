import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Board } from "../../data/board";
import { Columns } from "../../types";
import { onDragEnd } from "../../helpers/onDragEnd";
import { Add } from "@mui/icons-material";
import {
	Box,
	Button,
	Container,
	Typography,
	Card,
	CardContent,
} from "@mui/material";
import AddModal from "../../components/Modals/AddModal";
import Task from "../../components/Task";

const Home = () => {
	const [columns, setColumns] = useState<Columns>(Board);
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedColumn, setSelectedColumn] = useState("");

	const openModal = (columnId: any) => {
		setSelectedColumn(columnId);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	const handleAddTask = (taskData: any) => {
		const newBoard = { ...columns };
		newBoard[selectedColumn].items.push(taskData);
		setColumns(newBoard);
	};

	return (
		<>
			<DragDropContext onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}>
				<Container maxWidth="xl" sx={{ display: "flex", justifyContent: "space-between", py: 4, gap: 2 }}>
					{Object.entries(columns).map(([columnId, column]: any) => (
						<Box
							key={columnId}
							sx={{ display: "flex", flexDirection: "column", gap: 2, width: { md: 290, xs: 250 } }}
						>
							<Droppable droppableId={columnId} key={columnId}>
								{(provided: any) => (
									<Box
										ref={provided.innerRef}
										{...provided.droppableProps}
										sx={{ display: "flex", flexDirection: "column", gap: 2, py: 2 }}
									>
										<Card sx={{ bgcolor: "background.paper", boxShadow: 1 }}>
											<CardContent sx={{ textAlign: "center" }}>
												<Typography variant="h6" color="text.secondary">
													{column.name}
												</Typography>
											</CardContent>
										</Card>
										{column.items.map((task: any, index: any) => (
											<Draggable key={task.id.toString()} draggableId={task.id.toString()} index={index}>
												{(provided: any) => (
													<Box
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														sx={{ width: "100%" }}
													>
														<Task provided={provided} task={task} />
													</Box>
												)}
											</Draggable>
										))}
										{provided.placeholder}
									</Box>
								)}
							</Droppable>
							<Button
								startIcon={<Add />}
								variant="contained"
								color="primary"
								onClick={() => openModal(columnId)}
								sx={{ mt: 2, width: "100%" }}
							>
								Add Task
							</Button>
						</Box>
					))}
				</Container>
			</DragDropContext>

			<AddModal isOpen={modalOpen} onClose={closeModal} setOpen={setModalOpen} handleAddTask={handleAddTask} />
		</>
	);
};

export default Home;
