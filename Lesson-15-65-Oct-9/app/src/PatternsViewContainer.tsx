import { type FC, useEffect, useState } from "react";

/**
 * Presentational компонент. Может иметь своё состояние и логику, но
 * только необходимые для контроля отрисовки элементов.
 */
const DogImagesView: FC<{ loading?: boolean; sources: string[] }> = ({
  loading,
  sources,
}) => {
  if (loading) return <h1>Loading...</h1>;

  return (
    <ul>
      {sources.map((src) => (
        <li key={src}>
          <img src={src} alt="Dog" />
        </li>
      ))}
    </ul>
  );
};

/**
 * Container компонент. Содержит в себе все состояния и функции, отвечающие
 * за бизнес-логику приложения. НЕ содержит HTML компоненты и стили.
 */
const DogImages: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then(({ message }) => setImages(message))
      .finally(() => setIsLoading(false));
  }, []);

  return <DogImagesView loading={isLoading} sources={images} />;
};

export const App: FC = () => {
  return <DogImages />;
};
