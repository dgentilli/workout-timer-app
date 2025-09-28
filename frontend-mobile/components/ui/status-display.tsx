import { ColorScheme, Theme, themes } from '@/themes/main';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface StatusDisplayProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  button?: React.ReactNode;
}

const createStyles = (theme: Theme, colorScheme: ColorScheme) => {
  const { colors, spacing, typography } = theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconContainer: {
      marginBottom: spacing.lg,
    },
    title: {
      ...typography.heading,
      textAlign: 'center',
      color: colors[colorScheme]['text']['primary'],
      marginBottom: spacing.md,
    },
    subtitle: {
      ...typography.body,
      color: colors[colorScheme]['text']['secondary'],
      lineHeight: 20,
      marginBottom: spacing.lg,
    },
    buttonContainer: {
      marginTop: spacing.md,
    },
  });
};

type Styles = ReturnType<typeof createStyles>;

const StatusDisplay = ({
  title,
  subtitle,
  icon,
  button,
}: StatusDisplayProps) => {
  const buildVariant = 'main';
  const theme = themes[buildVariant];
  const { colorScheme } = useColorScheme();
  //@ts-ignore
  const styles: Styles = createStyles(theme, colorScheme);

  return (
    <View style={styles.container}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}

      <Text style={styles.title}>{title}</Text>

      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}

      {button && <View style={styles.buttonContainer}>{button}</View>}
    </View>
  );
};

export default StatusDisplay;
