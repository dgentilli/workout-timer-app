import { useState } from 'react';

const useAuthLogic = () => {
  const [email, setEmail] = useState('');

  return { email, setEmail };
};

export default useAuthLogic;
