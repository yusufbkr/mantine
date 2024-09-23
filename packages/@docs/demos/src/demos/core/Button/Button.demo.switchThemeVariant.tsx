import { Button, createTheme, Group, MantineThemeProvider } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme();

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Group>
        <Button
          variant={{
            light: 'filled',
            dark: 'outline',
          }}
        >
          Button
        </Button>
      </Group>
    </MantineThemeProvider>
  );
}
`;

const theme = createTheme();

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Group>
        <Button
          variant={{
            light: 'filled',
            dark: 'outline',
          }}
        >
          Button
        </Button>
      </Group>
    </MantineThemeProvider>
  );
}

export const switchThemeVariant: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};