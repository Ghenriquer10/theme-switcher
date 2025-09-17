import 'styled-components/native';

declare module 'styled-components/native' {
    export interface DefaultTheme {
        background: string;
        surface: string;
        primary: string;
        primaryVariant: string;
        secondary: string;
        secondaryVariant: string;
        error: string;
        text: string;
        textSecondary: string;
        border: string;
        success: string;
        warning: string;
        info: string;
        overlay: string;

    }
}
