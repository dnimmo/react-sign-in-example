interface Light {
  kind: "LIGHT";
}

interface Dark {
  kind: "DARK";
}

type Theme = Light | Dark;

export const lightTheme: Theme = { kind: "LIGHT" };

export const darkTheme: Theme = { kind: "DARK" };

export const initialTheme: Theme = lightTheme;

export default Theme;
