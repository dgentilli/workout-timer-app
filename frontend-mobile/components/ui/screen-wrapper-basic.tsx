import { ColorScheme, Theme, themes } from '@/themes/main';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenWrapperProps {
  title: string;
  children: React.ReactNode;
}

const createStyles = (theme: Theme, colorScheme: ColorScheme) => {
  const { colors, spacing, typography } = theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors[colorScheme]['background'],
    },
    content: {
      flex: 1,
      paddingHorizontal: spacing.md,
    },
    title: {
      ...typography.heading,
      color: colors[colorScheme]['primary'],
      marginBottom: spacing.md,
      paddingTop: spacing.lg,
      textAlign: 'center',
    },
  });
};
const ScreenWrapper = ({ title, children }: ScreenWrapperProps) => {
  const buildVariant = 'main';
  const theme = themes[buildVariant];
  const colorScheme = 'light';
  //@ts-ignore
  const styles = createStyles(theme, colorScheme);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
