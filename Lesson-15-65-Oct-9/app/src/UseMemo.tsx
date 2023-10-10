import React, { FC, useCallback, useEffect, useMemo, useState } from "react";

const ImagesList: FC<{
  items: { src: string; id: string }[];
  onClick: () => void;
}> = React.memo(({ items, onClick }) => {
  console.log("List render");
  return (
    <>
      <button onClick={onClick}>Click me</button>
      <ul>
        {items.map(({ src, id }) => (
          <li>
            <img key={id} src={src} alt={"Doggo"} />
          </li>
        ))}
      </ul>
    </>
  );
});

export const App: FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then(({ message }) => setImages(message));
  }, []);

  const mapped = useMemo(
    () =>
      images.map((src) => ({
        src,
        id: src,
      })),
    [images],
  );

  const onButtonClick = useCallback(() => setValue(Math.random()), []);

  console.log("Render");

  return (
    <>
      <h1>Random value: {value}</h1>
      <ImagesList items={mapped} onClick={onButtonClick} />
    </>
  );
};
