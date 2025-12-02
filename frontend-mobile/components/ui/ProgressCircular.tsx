import { BUILD_VARIANT } from '@/config/buildVariant';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ColorScheme, Theme, themes } from '@/themes/main';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface CircularProgressProps {
  progress: number;
  count: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  textColor?: string;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const createStyles = (theme: Theme, colorScheme: ColorScheme) => {
  const { typography, colors } = theme || {};

  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    progressBackground: {
      backgroundColor: colors[colorScheme]['accent'],
    },
    progressColor: {
      backgroundColor: colors[colorScheme]['primary'],
    },
    textContainer: {
      position: 'absolute',
    },
    countText: {
      ...typography.extraLarge,
      color: colors[colorScheme]['text']['primary'],
    },
  });
};

const CircularProgress = ({
  progress,
  count,
  size = 280,
  strokeWidth = 12,
}: CircularProgressProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const theme = themes[BUILD_VARIANT as keyof typeof themes];
  const { colorScheme } = useColorScheme();
  const styles = createStyles(theme, colorScheme);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [progress, animatedValue]);

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={styles.progressBackground.backgroundColor}
          strokeWidth={strokeWidth}
          fill='transparent'
        />
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={styles.progressColor.backgroundColor}
          strokeWidth={strokeWidth}
          fill='transparent'
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap='round'
          rotation='-90'
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.countText}>{count}</Text>
      </View>
    </View>
  );
};

export default CircularProgress;
