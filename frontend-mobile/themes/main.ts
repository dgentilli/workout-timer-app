export const themes = {
  main: {
    colors: {
      light: {
        primary: 'hsl(210, 100%, 55%)', // bright blue
        accent: 'hsl(25, 100%, 60%)', // energetic orange
        background: 'hsl(0, 0%, 100%)', // white
        surface: 'hsl(0, 0%, 98%)', // very light gray for cards/containers
        text: {
          primary: 'hsl(0, 0%, 10%)', // almost black
          secondary: 'hsl(0, 0%, 40%)', // medium gray
        },
        border: 'hsl(0, 0%, 85%)', // light gray for borders
      },
      dark: {
        primary: 'hsl(180, 70%, 50%)', // energetic teal
        accent: 'hsl(25, 100%, 65%)', // bright orange
        background: 'hsl(215, 25%, 12%)', // dark blue-gray
        surface: 'hsl(215, 20%, 18%)', // slightly lighter for cards/containers
        text: {
          primary: 'hsl(0, 0%, 95%)', // almost white
          secondary: 'hsl(0, 0%, 70%)', // light gray
        },
        border: 'hsl(215, 15%, 25%)', // dark gray for borders
      },
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 48,
    },
    typography: {
      heading: {
        fontSize: 24,
        fontWeight: '600' as const,
      },
      subheading: {
        fontSize: 22,
        fontWeight: '600' as const,
      },
      body: {
        fontSize: 16,
        fontWeight: '400' as const,
      },
      caption: {
        fontSize: 14,
        fontWeight: '400' as const,
      },
    },
    borderRadius: {
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16,
    },
  },
};

export type Theme = typeof themes.main;
export type ColorScheme = keyof Theme['colors'];
