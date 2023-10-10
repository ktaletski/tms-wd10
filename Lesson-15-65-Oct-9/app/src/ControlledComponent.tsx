import { FC, useState } from "react";

export const UncontrolledInput: FC<{ defaultValue?: string }> = ({
  defaultValue,
}) => {
  const [value, setValue] = useState<string>(defaultValue ?? "");
  return <ControlledComponent value={value} onChange={setValue} />;
};

export const ControlledComponent: FC<{
  value: string;
  onChange: (newValue: string) => void;
}> = ({ value, onChange }) => {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
};

export const App: FC = () => {
  return <UncontrolledInput defaultValue={"kek"} />;
};
