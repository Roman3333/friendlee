import { useSearchParams } from 'next/navigation';

export const UgeGetKey = () => {
  const searchParams = useSearchParams();
  return searchParams.get('key');
};
