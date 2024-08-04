'use client';

import { useState, useEffect } from 'react';
import io from 'Socket.IO-client';
import { UgeGetKey } from '../hooks/useGetKey';

export default function Home() {
  const socket = io('http://localhost:3000');
  const [isConnected, setIsConnected] = useState(false);
  const queryKey = UgeGetKey();

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    if (isConnected) {
      const intervalId = setInterval(() => {
        socket.emit('key', queryKey);
      }, 5000);

      return () => {
        clearInterval(intervalId);
        socket.disconnect();
      };
    }
  }, [socket, isConnected, queryKey]);

  return (
    <section>
      <div>Hello</div>
    </section>
  );
}
