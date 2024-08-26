/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { getRandomColors } from "../../helpers/getRandomColors";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Chip,
  Typography,
} from "@mui/material";

interface Tag {
  title: string;
  bg: string;
  text: string;
}

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddTask: (taskData: any) => void;
}

const AddModal = ({
  isOpen,
  onClose,
  setOpen,
  handleAddTask,
}: AddModalProps) => {
  const initialTaskData = {
    id: uuidv4(),
    title: "",
    description: "",
    priority: "",
    deadline: 0,
    image: "",
    alt: "",
    tags: [] as Tag[],
  };

  const [taskData, setTaskData] = useState(initialTaskData);
  const [tagTitle, setTagTitle] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (e.target) {
          setTaskData({ ...taskData, image: e.target.result as string });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleAddTag = () => {
    if (tagTitle.trim() !== "") {
      const { bg, text } = getRandomColors();
      const newTag: Tag = { title: tagTitle.trim(), bg, text };
      setTaskData({ ...taskData, tags: [...taskData.tags, newTag] });
      setTagTitle("");
    }
  };

  const closeModal = () => {
    setOpen(false);
    onClose();
    setTaskData(initialTaskData);
  };

  const handleSubmit = () => {
    handleAddTask(taskData);
    closeModal();
  };

  return (
    <Dialog open={isOpen} onClose={closeModal} fullWidth maxWidth="sm">
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={taskData.title}
          onChange={handleChange}
          variant="outlined"
          margin="dense"
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={taskData.description}
          onChange={handleChange}
          variant="outlined"
          margin="dense"
        />
        <FormControl fullWidth margin="dense">
          <InputLabel>Priority</InputLabel>
          <Select
            name="priority"
            value={taskData.priority}
            onChange={handleChange}
            variant="outlined"
          >
            <MenuItem value="">
              <em>Priority</em>
            </MenuItem>
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          type="number"
          label="Deadline (mins)"
          name="deadline"
          value={taskData.deadline}
          onChange={handleChange}
          variant="outlined"
          margin="dense"
        />
        <TextField
          fullWidth
          label="Tag Title"
          value={tagTitle}
          onChange={(e) => setTagTitle(e.target.value)}
          variant="outlined"
          margin="dense"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleAddTag}
          sx={{ mt: 1 }}
        >
          Add Tag
        </Button>
        <Box mt={2}>
          {taskData.tags.length > 0 && (
            <Typography variant="subtitle1">Tags:</Typography>
          )}
          {taskData.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag.title}
              sx={{
                backgroundColor: tag.bg,
                color: tag.text,
                marginRight: 1,
                marginBottom: 1,
              }}
            />
          ))}
        </Box>
        <Box mt={2} display="flex" gap={2} alignItems="center">
          <TextField
            fullWidth
            label="Image Alt"
            name="alt"
            value={taskData.alt}
            onChange={handleChange}
            variant="outlined"
            margin="dense"
          />
          <Button
            variant="contained"
            component="label"
            sx={{ width: "fit-content" }}
          >
            Upload Image
            <input
              type="file"
              hidden
              name="image"
              onChange={handleImageChange}
            />
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Submit Task
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddModal;
