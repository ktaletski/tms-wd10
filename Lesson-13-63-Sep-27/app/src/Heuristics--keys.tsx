import { FC, forwardRef, useRef, useState } from "react";

enum TaskStatus {
  NEW = "NEW",
  COMPLETED = "COMPLETED",
}

interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

// const mockTasks: Task[] = [
//   { id: "h18ebac", title: "Вынести мусор", status: TaskStatus.NEW },
//   { id: "lDAc9If", title: "Приготовить ужин", status: TaskStatus.NEW },
//   { id: "I1aba0c", title: "Выспаться", status: TaskStatus.COMPLETED },
//   { id: "I1aba1c", title: "Выспаться x2", status: TaskStatus.NEW },
//   { id: "I1bbc1c", title: "Покормить котей", status: TaskStatus.COMPLETED },
//   { id: "I1bbf2c", title: "Оплатить счета", status: TaskStatus.COMPLETED },
// ];

interface TaskItemProps {
  title: string;
  deleteTask: () => void;
}

const TaskItem: FC<TaskItemProps> = ({ title, deleteTask }) => {
  return (
    <li>
      {title} <button onClick={deleteTask}>X</button>
    </li>
  );
};

export const MyComponent: FC<{ list: Task[] }> = ({ list }) => {
  const [value, setValue] = useState(0);
  const [tasks, setTasks] = useState(() => {
    // eslint-disable-next-line
    // console.log('вычисление начального списка');
    return list
      .filter((v) => true)
      .map((v) => v)
      .sort();
  });

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // // eslint-disable-next-line
  // console.log('re-render')

  return (
    <div>
      <h1>Tasks</h1>
      <ol>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              title={task.title}
              deleteTask={() => deleteTask(task.id)}
            />
          );
        })}
      </ol>

      <button onClick={() => setValue((p) => ++p)}>{value}</button>
    </div>
  );
};

const CustomInput = forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} />;
});

export const Component: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const storageRef = useRef<number>(0);

  const [, setState] = useState(0);

  function handleClick() {
    inputRef.current?.focus();
  }

  function increment() {
    storageRef.current++;
  }

  function forceUpdate() {
    setState((prev) => ++prev);
  }

  // eslint-disable-next-line
  console.log(storageRef);
  // eslint-disable-next-line
  console.log('re-render');

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
      <button onClick={increment}>Update number</button>
      <button onClick={forceUpdate}>Force re-render</button>
    </div>
  );
};
