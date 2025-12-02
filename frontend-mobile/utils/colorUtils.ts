import { ColorScheme, Theme } from '@/themes/main';

export const getPrimaryTextColor = (
  colors: Theme['colors'],
  colorScheme: ColorScheme
) => {
  return colors[colorScheme]['text']['primary'];
};

export const getSecondaryTextColor = (
  colors: Theme['colors'],
  colorScheme: ColorScheme
) => {
  return colors[colorScheme]['text']['secondary'];
};
