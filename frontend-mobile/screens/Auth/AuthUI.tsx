import ScreenWrapper from '@/components/ui/screen-wrapper-basic';
import { BUILD_VARIANT } from '@/config/buildVariant';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import { ColorScheme, Theme, themes } from '@/themes/main';
import { StyleSheet, Text, TextInput } from 'react-native';

interface AuthUIProps {
  email: string;
  setEmail: (email: string) => void;
}

const createStyles = (theme: Theme, colorScheme: ColorScheme) => {
  const { colors, spacing, borderRadius, typography } = theme || {};

  return StyleSheet.create({
    label: {
      ...typography.subheading,
      color: colors[colorScheme].text.primary,
      paddingVertical: spacing.md,
    },
    input: {
      ...typography.body,
      borderColor: colors[colorScheme].accent,
      color: colors[colorScheme].text.primary,
      borderWidth: 1,
      width: '100%',
      borderRadius: borderRadius.md,
      padding: spacing.sm,
      textAlign: 'center',
    },
  });
};

const AuthUI = ({ email, setEmail }: AuthUIProps) => {
  const theme = themes[BUILD_VARIANT as keyof typeof themes];
  const { colorScheme } = useColorScheme();
  const styles = createStyles(theme, colorScheme);

  return (
    <ScreenWrapper title='Auth'>
      <Text style={styles.label}>Enter your email address</Text>

      <TextInput
        style={styles.input}
        value={email}
        inputMode='email'
        keyboardType='email-address'
        placeholder='Email Address'
        placeholderTextColor={styles.input.color}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(input) => setEmail(input)}
        // onEndEditing={(event) => validateEmailField(event.nativeEvent.text)}
      />
    </ScreenWrapper>
  );
};

export default AuthUI;
