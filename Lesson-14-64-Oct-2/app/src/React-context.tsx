import React, { FC, PropsWithChildren, useContext, useState } from "react";

type ColorScheme = "light" | "dark";
type Mode = "manual" | "auto";

interface ThemeContextPayload {
  colorScheme: ColorScheme;
  mode: Mode;
  setColorScheme: (scheme: ColorScheme) => void;
  setMode: (m: Mode) => void;
}
const ThemeContext = React.createContext<ThemeContextPayload>({
  colorScheme: "light",
  mode: "auto",
  // eslint-disable-next-line
  setColorScheme: () => { },
  // eslint-disable-next-line
  setMode: () => { },
});

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const [mode, setMode] = useState<Mode>("auto");

  return (
    <ThemeContext.Provider
      value={{ mode, colorScheme, setMode, setColorScheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const { colorScheme } = useContext(ThemeContext);
  return { colorScheme };
};

const useThemeSwithcher = () => {
  return useContext(ThemeContext);
};

const Logo = () => {
  const { colorScheme } = useTheme();

  return <span>{colorScheme} logo</span>;
};

const ThemeSwitcher: FC = () => {
  const { mode, colorScheme, setColorScheme } = useThemeSwithcher();

  return (
    <label>
      <input
        disabled={mode !== "manual"}
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

const ModeSwitcher: FC = () => {
  const { mode, setMode } = useThemeSwithcher();

  return (
    <label>
      <input
        type="checkbox"
        defaultChecked={mode === "auto"}
        onChange={(e) => {
          setMode(e.target.checked ? "auto" : "manual");
        }}
      />
      Use system color scheme
    </label>
  );
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
    </ul>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <ThemeSwitcher />
        <br />
        <ModeSwitcher />
        <List />
      </main>
    </ThemeProvider>
  );
};
