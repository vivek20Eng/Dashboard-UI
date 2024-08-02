import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Checkbox,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  "&.MuiListItem-root": {
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

const tasks = [
  { text: "Finish project documentation", color: pink[200] },
  { text: "Review code changes", color: pink[200] },
  { text: "Prepare for the team meeting", color: pink[200] },
  { text: "Update the product roadmap", color: pink[200] },
];

const TaskList = () => {
  const handleEditClick = (task) => {
    console.log(`Edit ${task.text}`);
  };

  return (
    <div className="bg-[#27293d] p-6 rounded-lg text-white w-full lg:w-6/12">
      <h3 className="text-xl mb-4">Tasks</h3>
      <List>
        {tasks.map((task, index) => (
          <React.Fragment key={index}>
            <StyledListItem>
              <Checkbox
                edge="start"
                sx={{
                  color: task.color,
                  "&.Mui-checked": {
                    color: task.color,
                  },
                }}
              />
              <ListItemText primary={task.text} />
              <div className="flex w-6/12 justify-end items-center cursor-pointer">
                <IconButton
                  onClick={() => handleEditClick(task)}
                  color="inherit"
                >
                  <EditIcon />
                </IconButton>
              </div>
            </StyledListItem>
            {index < tasks.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default TaskList;
