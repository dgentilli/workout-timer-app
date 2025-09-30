import { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { BUILD_VARIANT } from '@/config/buildVariant';
import { ColorScheme, Theme, themes } from '@/themes/main';

type TitlePosition = 'left' | 'center' | 'right'; // default left

interface ListItemProps {
  title: string;
  titlePosition?: TitlePosition;
  leftElement?: ReactNode;
  onPressLeft?: () => void;
  rightElement?: ReactNode;
  onPressRight?: () => void;
  onPressWrapper?: () => void;
  styleWrapper?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

const createStyles = (
  theme: Theme,
  colorScheme: ColorScheme,
  titlePosition: TitlePosition
) => {
  const { colors, spacing, typography, borderRadius } = theme;

  return StyleSheet.create({
    listItemWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.md,
      marginBottom: spacing.md,
      borderRadius: borderRadius.md,
      backgroundColor: colors[colorScheme]['surface'],
      borderColor: colors[colorScheme]['surface'],
      borderBottomWidth: 1,
    },
    titleText: {
      ...typography.body,
      textAlign: titlePosition,
      color: 'black',
    },
  });
};

const ListItem = ({
  title,
  titlePosition = 'left',
  leftElement,
  onPressLeft,
  rightElement,
  onPressRight,
  onPressWrapper,
  styleWrapper,
  styleText,
}: ListItemProps) => {
  const theme = themes[BUILD_VARIANT as keyof typeof themes];
  const { colorScheme } = useColorScheme();

  const styles = createStyles(theme, colorScheme, titlePosition);

  return (
    <View style={[styles.listItemWrapper, styleWrapper]}>
      {leftElement && <View>{leftElement}</View>}
      <View>
        <Text style={[styles.titleText, styleText]}>{title}</Text>
      </View>
      {rightElement && <View>{rightElement}</View>}
    </View>
  );
};

export default ListItem;
