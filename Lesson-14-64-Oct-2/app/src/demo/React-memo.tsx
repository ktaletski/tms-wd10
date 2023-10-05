import React, { FC, useEffect, useRef, useState } from "react";

type Privacy = "public" | "private";

const PostPrivacy: FC<{ value: Privacy; onChange: (p: Privacy) => void }> = ({
  value,
  onChange,
}) => {
  return (
    <label>
      Post privacy:
      <select
        name="privacy"
        defaultValue={value}
        onChange={(e) => onChange(e.target.value as Privacy)}
      >
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
    </label>
  );
};

const TextEditor: FC = () => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.backgroundColor = "red";
    setTimeout(() => {
      if (!ref.current) return;
      ref.current.style.backgroundColor = "white";
    }, 500);
  });

  return <textarea ref={ref} style={{ transition: "background-color 0.2s" }} />;
};

export const App = () => {
  const [privacy, setPrivacy] = useState<Privacy>("public");

  return (
    <>
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <PostPrivacy value={privacy} onChange={setPrivacy} />
        <br />
        <br />
        <TextEditor />
      </main>
    </>
  );
};
