import ActionSheetWrapper from './action-sheet-wrapper';
import ListItem from './ListItem';

const AppAppearanceSheet = () => {
  return (
    <ActionSheetWrapper sheetId={'settings-appearance'} title='App Appearance'>
      <ListItem title='Light' />
      <ListItem title='Dark' />
    </ActionSheetWrapper>
  );
};

export default AppAppearanceSheet;
