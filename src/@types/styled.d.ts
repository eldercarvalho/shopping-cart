import 'styled-components';

declare module 'styled-components' {
  export interface ThemeColors {
    primary: string;
    secondary: string;
    textColor: string;
    info: string;
    success: string;
    error: string;
    warning: string;
    borderColor: string;
  }
  export interface DefaultTheme {
    colors: ThemeColors;
  }
}
