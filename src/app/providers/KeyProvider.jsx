'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UgeGetKey } from '../../hooks/useGetKey';

const KeyProvider = ({ children }) => {
  const { replace } = useRouter();
  const queryKey = UgeGetKey();

  useEffect(() => {
    if (!queryKey) {
      replace('/not-found');
    }
  }, [queryKey, replace]);

  return <>{children}</>;
};

export default KeyProvider;
