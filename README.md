# Theme Switcher React Native

Este projeto demonstra como implementar a troca dinâmica entre tema claro e escuro em um app React Native usando **styled-components**.

## Bibliotecas utilizadas

- `expo`
- `react-native`
- `styled-components`
- `react`
- `typescript`

## Passo a passo

### 1. Instale as dependências

```bash
npm install styled-components
npm install --save-dev @types/styled-components-react-native
```

### 2. Defina os temas

Crie um arquivo `theme.ts`:

```ts
export const darkTheme = {
    background: '#121212',
    surface: '#1E1E1E',   // áreas elevadas (cards, modais, appbar)
    primary: '#BB86FC',
    primaryVariant: '#3700B3',
    secondary: '#03DAC6',
    secondaryVariant: '#018786',
    error: '#CF6679',
    text: '#FFFFFF',
    textSecondary: '#B3B3B3',
    border: '#272727',
    success: '#4CAF50',
    warning: '#FF9800',
    info: '#2196F3',
    overlay: 'rgba(0,0,0,0.5)', // para modais
};

export const lightTheme = {
    background: '#FFFFFF',
    surface: '#F5F5F5',
    primary: '#6200EE',
    primaryVariant: '#3700B3',
    secondary: '#03DAC6',
    secondaryVariant: '#018786',
    error: '#B00020',
    text: '#000000',
    textSecondary: '#4D4D4D',
    border: '#E0E0E0',
    success: '#4CAF50',
    warning: '#FF9800',
    info: '#2196F3',
    overlay: 'rgba(0,0,0,0.3)',
};


export const theme = [darkTheme, lightTheme];
```

### 3. Configure o ThemeProvider

No seu `App.tsx`:

```tsx
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { lightTheme, darkTheme } from './theme';
import { SafeAreaView, Button, Text } from 'react-native';

export default function App() {
    const [isDark, setIsDark] = useState(false);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? darkTheme.background : lightTheme.background, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: isDark ? darkTheme.text : lightTheme.text }}>Tema {isDark ? 'Escuro' : 'Claro'}</Text>
                <Button title="Trocar Tema" onPress={() => setIsDark(!isDark)} />
            </SafeAreaView>
        </ThemeProvider>
    );
}
```

### 4. Usando temas nos componentes

Exemplo com styled-components:

```tsx
import styled from 'styled-components/native';

const ThemedText = styled.Text`
    color: ${({ theme }) => theme.text};
`;
```

### 5. Pronto!

---

