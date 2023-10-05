import React, { FC, PropsWithChildren, useContext, useState } from "react";

type ColorScheme = "light" | "dark";

interface ThemeContextData {
  colorScheme: ColorScheme;
  setColorScheme: (c: ColorScheme) => void;
}
const ThemeContext = React.createContext<ThemeContextData>({
  colorScheme: "light",
  setColorScheme: () => {
    // eslint-disable-next-line
    console.warn("Can not set color scheme outside of ThemeContext");
  },
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");

  return (
    <ThemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { colorScheme } = useContext(ThemeContext);
  return { colorScheme };
};

export const useThemeSwithcher = () => {
  return useContext(ThemeContext);
};

const ThemeSwitcher = () => {
  // забираем значение текущей темы и метод для её переключения
  // используем в чекбоксе
  const { colorScheme, setColorScheme } = useThemeSwithcher();
  return (
    <label>
      <input
        type="checkbox"
        defaultChecked={colorScheme === "dark"}
        onChange={(e) => {
          setColorScheme(e.target.checked ? "dark" : "light");
        }}
      />
      Dark mode
    </label>
  );
};

const Logo = () => {
  // забираем значение текущей темы в логотипе
  const { colorScheme } = useTheme();
  return <span>{colorScheme} logo</span>;
};

const List = () => {
  return (
    <ul>
      <li>
        <Logo /> item 1
      </li>
      <li>
        <Logo /> item 2
      </li>
      <li>
        <Logo /> item 3
      </li>
      <li>
        <Logo /> item 4
      </li>
      <li>
        <Logo /> item 5
      </li>
    </ul>
  );
};

export const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");

  return (
    <ThemeContext.Provider value={{ colorScheme, setColorScheme }}>
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <ThemeSwitcher />
        <List />
      </main>
    </ThemeContext.Provider>
  );
};
