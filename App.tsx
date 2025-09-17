import { SafeAreaView } from 'react-native-safe-area-context';
import { Home } from './src/Home';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import { useColorScheme } from 'react-native';

export default function App() {
  const colorScheme = useColorScheme();
  const currentTheme = theme[colorScheme === 'dark' ? 0 : 1];
  console.log('Current theme:', colorScheme);
  return (
    <ThemeProvider theme={currentTheme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.background }}>
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
}
