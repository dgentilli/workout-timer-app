import { memo } from 'react';
import SettingsUI from './SettingsUI';
import useSettingsLogic from './SettingsLogic';

const MemoizedSettingsUI = memo(SettingsUI);

const SettingsScreen = () => {
  const { listConfig } = useSettingsLogic();

  return <MemoizedSettingsUI listConfig={listConfig} />;
};

export default SettingsScreen;
