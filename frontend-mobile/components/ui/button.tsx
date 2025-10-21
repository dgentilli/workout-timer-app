import { ColorScheme, Theme, themes } from '@/themes/main';
import React from 'react';
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { BUILD_VARIANT } from '@/config/buildVariant';
interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: { height?: number; width?: number };
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const createStyles = (
  theme: Theme,
  colorScheme: ColorScheme,
  variant: 'primary' | 'secondary' | 'destructive',
  size?: { height?: number; width?: number },
  fullWidth?: boolean,
  disabled?: boolean
) => {
  const isPrimary = variant === 'primary';
  const { colors, spacing, typography, borderRadius } = theme;
  const getButtonBgColor = () => {
    if (variant === 'destructive') return 'red';
    if (variant === 'secondary') return 'transparent';
    return colors[colorScheme]['primary'];
  };

  const getButtonTextColor = () => {
    if (variant === 'secondary') return colors[colorScheme]['primary'];
    return colors[colorScheme]['surface'];
  };

  return StyleSheet.create({
    button: {
      height: size?.height || spacing.xxl,
      width: fullWidth ? '100%' : size?.width || 'auto',
      borderRadius: borderRadius.md,
      backgroundColor: getButtonBgColor(),
      borderWidth: isPrimary ? 0 : 1,
      borderColor: variant === 'secondary' ? '#007AFF' : 'transparent',
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
      color: getButtonTextColor(),
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
  style,
}: ButtonProps) => {
  const theme = themes[BUILD_VARIANT as keyof typeof themes];
  const { colorScheme } = useColorScheme();
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
      style={({ pressed }) => [
        styles.button,
        { opacity: pressed ? 0.7 : 1 },
        style,
      ]}
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
