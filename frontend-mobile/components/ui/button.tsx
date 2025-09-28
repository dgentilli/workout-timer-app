import { ColorScheme, Theme, themes } from '@/themes/main';
import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  size?: { height?: number; width?: number };
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const createStyles = (
  theme: Theme,
  colorScheme: ColorScheme,
  variant: 'primary' | 'secondary',
  size?: { height?: number; width?: number },
  fullWidth?: boolean,
  disabled?: boolean
) => {
  const isPrimary = variant === 'primary';
  const { colors, spacing, typography, borderRadius } = theme;

  return StyleSheet.create({
    button: {
      height: size?.height || spacing.xxl,
      width: fullWidth ? '100%' : size?.width || 'auto',
      borderRadius: borderRadius.md,
      backgroundColor: colors[colorScheme]['primary'],
      borderWidth: isPrimary ? 0 : 1,
      borderColor: '#007AFF',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: spacing.lg,
      opacity: disabled ? 0.5 : 1,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      ...typography.body,
      color: colors[colorScheme]['surface'],
    },
    iconContainer: {
      marginRight: spacing.sm,
    },
  });
};

type Styles = ReturnType<typeof createStyles>;

const Button = ({
  title,
  onPress,
  variant = 'primary',
  size,
  fullWidth = false,
  disabled = false,
  icon,
}: ButtonProps) => {
  const buildVariant = 'main';
  const theme = themes[buildVariant];
  const colorScheme = 'light';
  const styles: Styles = createStyles(
    //@ts-ignore
    theme,
    colorScheme,
    variant,
    size,
    fullWidth,
    disabled
  );

  const handlePress = () => {
    if (!disabled) {
      onPress();
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.button, { opacity: pressed ? 0.7 : 1 }]}
      onPress={handlePress}
      disabled={disabled}
    >
      <View style={styles.content}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
