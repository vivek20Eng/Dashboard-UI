import React from "react";
import styled from "styled-components";
import { Edit as EditIcon } from "@mui/icons-material";

const TaskList = () => {
  const tasks = [
    {
      id: 1,
      title: "Update the Documentation",
      description:
        "The GDPR is a regulation that requires businesses to protect the personal data and privacy of European citizens.",
    },
    {
      id: 2,
      title: "GDPR Compliance",
      description:
        "Ensure compliance with the GDPR regulations for handling personal data.",
    },
    {
      id: 3,
      title: "Solve the Issues",
      description:
        "Address and resolve the reported issues from the recent feedback.",
    },
    {
      id: 4,
      title: "Release v2.0.0",
      description:
        "Deploy the new version of the software with additional features and fixes.",
    },
    
  ];

  return (
    <div class="flex flex-col bg-[#27293d] rounded-lg p-6 w-full lg:w-6/12">
        <h1 className="text-xl font text-slate-300 px-4 pb-6">Tasks</h1>
      {tasks.map((task) => (
        <session
          key={task.id}
          className="flex justify-between px-6 py-4 border-y w-full border-gray-200/20"
        >
          <div class="flex gap-6 w-6/5">
            <input type="checkbox" id={task.id} className="accent-blue-500" />
            <div>
              <h2 className="font-bold text-white text-lg leading-8">
                {task.title}
              </h2>
              <p className="text-lg font-thin text-white">{task.description}</p>
            </div>
          </div>
          <div className="flex w-6/1 justify-end items-center cursor-pointer">

          <EditIcon style={{ color: "white" }} />
          </div>
        </session>
      ))}
    </div>
  );
};

export default TaskList;
