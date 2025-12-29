import { memo } from 'react';
import useAuthLogic from './AuthLogic';
import AuthUI from './AuthUI';

const MemoizedAuthUI = memo(AuthUI);

const AuthScreen = () => {
  const {} = useAuthLogic();

  return <MemoizedAuthUI />;
};

export default AuthScreen;
