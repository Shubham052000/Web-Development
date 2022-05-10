import { useCallback } from "react";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const createTask = useCallback(
    (taskText, taskData) => {
      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
    },
    [props]
  );

  const {
    isLoading,
    error,
    sendRequest: sendTaskRequest,
  } = useHttp(createTask);

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "https://react-http-174dc-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
