import { type FC, useEffect, useState } from "react";

/**
 * Выделяем всю бизнес-логику в отдельный хук
 */
const useDogImages = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then(({ message }) => setImages(message))
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, images };
};

/**
 * Используем один или несколько хуков с бизнес логикой
 * прямо внутри компоненты-отображения
 */
const DogImages: FC = () => {
  const { isLoading, images } = useDogImages();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <ul>
      {images.map((src) => (
        <li key={src}>
          <img src={src} alt="Dog" />
        </li>
      ))}
    </ul>
  );
};

/**
 * При необходимости, отдельный Presentational компонент будет
 * очень легко вынести, просто убрав из DogImages хуки и добавив пропсы
 */

export const App: FC = () => {
  return <DogImages />;
};
