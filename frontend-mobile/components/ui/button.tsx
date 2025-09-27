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
  variant: 'primary' | 'secondary',
  size?: { height?: number; width?: number },
  fullWidth?: boolean,
  disabled?: boolean
) => {
  const isPrimary = variant === 'primary';

  return StyleSheet.create({
    button: {
      height: size?.height || 48,
      width: fullWidth ? '100%' : size?.width || 'auto',
      borderRadius: 8,
      backgroundColor: isPrimary ? '#007AFF' : 'transparent',
      borderWidth: isPrimary ? 0 : 1,
      borderColor: '#007AFF',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
      opacity: disabled ? 0.5 : 1,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      fontWeight: '600',
      color: isPrimary ? '#FFFFFF' : '#007AFF',
    },
    iconContainer: {
      marginRight: 8,
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
  const styles: Styles = createStyles(variant, size, fullWidth, disabled);

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
