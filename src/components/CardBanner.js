import React from "react";
import TableComponent from "./TableComponent";
import TaskList from "./TaskList";

function CardBanner() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
      <TaskList />
      <TableComponent />
    </div>
  );
}

export default CardBanner;
