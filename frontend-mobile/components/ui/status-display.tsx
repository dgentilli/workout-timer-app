import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatusDisplayProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  button?: React.ReactNode;
}

const createStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconContainer: {
      marginBottom: 24,
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      textAlign: 'center',
      color: '#1a1a1a',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
      color: '#666666',
      lineHeight: 20,
      marginBottom: 24,
    },
    buttonContainer: {
      marginTop: 16,
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
  const styles: Styles = createStyles();

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
