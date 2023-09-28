/**
 * This file is used for the in-class or in-slides demo's only.
 * It is not a part of the application.
 */

import { type FC, useEffect, useState } from "react";

enum TaskStatus {
  NEW = "NEW",
  COMPLETED = "COMPLETED",
}

interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

const mockTasks: Task[] = [
  { id: "h18ebac", title: "Вынести мусор", status: TaskStatus.NEW },
  { id: "lDAc9If", title: "Приготовить ужин", status: TaskStatus.NEW },
  { id: "I1aba0c", title: "Выспаться", status: TaskStatus.COMPLETED },
  { id: "I1aba1c", title: "Выспаться x2", status: TaskStatus.NEW },
  { id: "I1bbf1c", title: "Покормить котей", status: TaskStatus.COMPLETED },
  { id: "I1bbf1c", title: "Оплатить счета", status: TaskStatus.COMPLETED },
];

interface ListItemProps {
  data: Task;
  onDelete: () => void;
}

const ListItem: FC<ListItemProps> = ({ data, onDelete }) => {
  useEffect(() => {
    // eslint-disable-next-line
    console.log(`React смонтировал "${data.title}"`);

    return () => {
      // eslint-disable-next-line
      console.log(`React отмонтировал "${data.title}"`);
    };
  }, []);

  return (
    <li>
      <span>{data.title}</span> <button onClick={onDelete}>X</button>
    </li>
  );
};

interface ListProps {
  items: Task[];
  onDelete: (id: string) => void;
}

const List: FC<ListProps> = ({ items, onDelete }) => {
  return (
    <ol>
      {items.map((item, idx) => (
        <ListItem
          key={idx}
          data={item}
          onDelete={() => {
            onDelete(item.id);
          }}
        />
      ))}
    </ol>
  );
};

export const Component: FC = () => {
  const [items, setItems] = useState(mockTasks);

  const onDelete = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return <List items={items} onDelete={onDelete} />;
};
