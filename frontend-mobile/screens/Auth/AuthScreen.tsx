import { memo } from 'react';
import useAuthLogic from './AuthLogic';
import AuthUI from './AuthUI';

const MemoizedAuthUI = memo(AuthUI);

const AuthScreen = () => {
  const { email, setEmail } = useAuthLogic();

  return <MemoizedAuthUI email={email} setEmail={setEmail} />;
};

export default AuthScreen;
