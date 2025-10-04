import { BUILD_VARIANT } from '@/config/buildVariant';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ColorScheme, Theme, themes } from '@/themes/main';
import { MaterialIcons } from '@expo/vector-icons';
import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface ActionSheetWrapperProps {
  title: string;
  children: ReactNode | ReactNode[];
  sheetId: string;
}

type Insets = { top: number; bottom: number; left: number; right: number };

const BOTTOM_OFFSET = 20;

const createStyles = (
  theme: Theme,
  colorScheme: ColorScheme,
  insets: Insets
) => {
  const { colors, spacing, typography } = theme;

  return StyleSheet.create({
    containerStyles: {
      padding: spacing.md,
      backgroundColor: colors[colorScheme]['background'],
      maxHeight: '80%',
      paddingBottom: insets.bottom + BOTTOM_OFFSET,
    },
    headerWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: spacing.md,
      paddingBottom: spacing.lg,
    },
    titleText: {
      ...typography.subheading,
      marginLeft: spacing.lg,
    },
  });
};

const ActionSheetWrapper = ({
  title,
  children,
  sheetId,
}: ActionSheetWrapperProps) => {
  const theme = themes[BUILD_VARIANT as keyof typeof themes];
  const { colorScheme } = useColorScheme();
  const insets = useSafeAreaInsets();
  const { colors } = theme;

  const styles = createStyles(theme, colorScheme, insets);

  return (
    <ActionSheet
      id={sheetId}
      containerStyle={styles.containerStyles}
      headerAlwaysVisible
    >
      <View style={styles.headerWrapper}>
        <MaterialIcons
          name='clear'
          size={32}
          color={colors[colorScheme]['text']['secondary']}
        />
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View>{children}</View>
    </ActionSheet>
  );
};

export default ActionSheetWrapper;
