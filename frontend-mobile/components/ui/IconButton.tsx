import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ColorScheme, Theme, themes } from '@/themes/main';
import { BUILD_VARIANT } from '@/config/buildVariant';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface IconButtonProps {
  name: string;
  onPress: () => void;
  color?: string;
  size?: number;
  accessibilityLabel: string;
  disabled?: boolean;
  hitSlop?: number;
}

const createStyles = (theme: any, colorScheme: any) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    disabled: {
      opacity: 0.5,
    },
  });
};

const IconButton = ({
  name,
  onPress,
  color = '#000000',
  size = 32,
  accessibilityLabel,
  disabled = false,
  hitSlop = 8,
}: IconButtonProps) => {
  const theme = themes[BUILD_VARIANT as keyof typeof themes];
  const { colorScheme } = useColorScheme();
  const styles = createStyles(theme, colorScheme);
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole='button'
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled }}
      hitSlop={hitSlop}
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.7 : 1 },
        disabled && styles.disabled,
      ]}
    >
      <MaterialIcons
        name={name as any}
        size={size}
        color={disabled ? '#CCCCCC' : color}
      />
    </Pressable>
  );
};

export default IconButton;
