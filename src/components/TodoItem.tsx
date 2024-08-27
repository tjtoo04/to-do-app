import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import axios from "axios";

interface TodoItemProps {
  todo: {
    id: number | string;
    title: string;
    completed: boolean;
  };
  remove: (id: number | string) => void;
  toggle: () => void;
}

export default function TodoItem({
  todo,
  remove,
  toggle,
}: TodoItemProps): JSX.Element {
  const labelId = `checkbox-list-label-${todo.id}`;

  const removeTodo = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/task-delete/${todo.id}/`);
      remove(todo.id);
    } catch (error) {
      console.error("Error deleting the task:", error);
    }
  };

  const toggleTodo = async () => {
    try {
      await axios.patch(`http://localhost:8000/api/task-update/${todo.id}/`, {
        completed: !todo.completed,
      });
      toggle();
    } catch (error) {
      console.error("Error toggling the task:", error);
    }
  };

  return (
    <ListItem
      key={todo.id}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={removeTodo}>
          <DeleteOutlineIcon sx={{ color: "#eb5e28" }} />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
            onChange={toggleTodo}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleOutlineIcon />}
            color="warning"
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.title} />
      </ListItemButton>
    </ListItem>
  );
}
