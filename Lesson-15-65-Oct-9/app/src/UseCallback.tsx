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

const FontWeightControl: FC<{
  isBold: boolean;
  setIsBold: (value: boolean) => void;
}> = ({ isBold, setIsBold }) => {
  return (
    <label>
      Bold
      <input
        type="checkbox"
        checked={isBold}
        onChange={(e) => setIsBold(e.target.checked)}
      />
    </label>
  );
};

const TextEditor: FC<{ isBold: boolean; onFocus: () => void }> = React.memo(
  ({ onFocus }) => {
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
      if (!ref.current) return;
      ref.current.style.backgroundColor = "red";
      setTimeout(() => {
        if (!ref.current) return;
        ref.current.style.backgroundColor = "white";
      }, 500);
    });

    return (
      <textarea
        ref={ref}
        style={{ transition: "background-color 0.2s" }}
        onFocus={onFocus}
      />
    );
  },
);

export const App = () => {
  const [privacy, setPrivacy] = useState<Privacy>("public");
  const [isBold, setIsBold] = useState<boolean>(false);

  const onEditorFocus = () => {
    console.log("focused");
  };

  return (
    <>
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <PostPrivacy value={privacy} onChange={setPrivacy} />
        <br />
        <FontWeightControl isBold={isBold} setIsBold={setIsBold} />
        <br />
        <TextEditor isBold={isBold} onFocus={onEditorFocus} />
      </main>
    </>
  );
};
