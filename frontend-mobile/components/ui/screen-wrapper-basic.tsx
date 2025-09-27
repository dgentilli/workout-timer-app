import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenWrapperProps {
  title: string;
  children: React.ReactNode;
}

const createStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 16,
      paddingTop: 24,
      textAlign: 'center',
    },
  });
};
const ScreenWrapper = ({ title, children }: ScreenWrapperProps) => {
  const styles = createStyles();
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
