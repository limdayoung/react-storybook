import React from "react";
import "./App.css";
import TaskList from "./components/TaskList.js";

const onPinTask = () => {
  console.log("click onPinTask");
};
const onArchiveTask = () => {
  console.log("click onArchiveTask");
};

function App() {
  const tasks_sample = [
    {
      id: "1",
      title: "Task 1",
      state: "TASK_INBOX",
    },
    {
      id: "2",
      title: "Task 2",
      state: "TASK_INBOX",
    },
    {
      id: "3",
      title: "Task 3",
      state: "TASK_INBOX",
    },
    {
      id: "4",
      title: "Task 4",
      state: "TASK_INBOX",
    },
    {
      id: "5",
      title: "Task 5",
      state: "TASK_INBOX",
    },
    {
      id: "6",
      title: "Task 6 (pinned)",
      state: "TASK_PINNED",
    },
  ];

  return (
    <>
      <h2 style={{ color: "#fff" }}>Learn storybook tutorial</h2>
      <div style={{ padding: "3rem" }}>
        <TaskList
          // loading
          tasks={tasks_sample}
          onPinTask={onPinTask}
          onArchiveTask={onArchiveTask}
        />
      </div>
    </>
  );
}

export default App;
