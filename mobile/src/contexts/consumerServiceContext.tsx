import { createContext, useState, useEffect, useMemo, ReactNode } from "react";
import { Text } from 'react-native';

import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from '@connectrpc/connect-web';
import { ConsumerService } from '../../libs/genproto/thirdfort/consumer/v1/service_pb.ts'


type ConsumerServiceProps = {
  children: ReactNode;
}

type ConsumerServiceClient = ReturnType<
  typeof createClient<typeof ConsumerService>
>;

interface ConsumerServiceClientContextType {
  client: ConsumerServiceClient | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const ConsumerServiceClientContext = createContext<
  ConsumerServiceClientContextType | undefined
>(undefined);

export const ConsumerServiceClientProvider = ({children}: ConsumerServiceProps) => {
  const [client, setClient] = useState<ConsumerServiceClient | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    try {
      const transport = createConnectTransport({
        baseUrl: "http://localhost:8080",
        useBinaryFormat: true,
      });
          
      const rpcClient = createClient(ConsumerService, transport);
      setClient(rpcClient);
      console.log(`ConnectRPC client initialized`);
    } catch (e) {
      console.error('Failed to initialize client:', e);
      setError(e instanceof Error ? e : new Error(String(e)));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      client,
      isLoading,
      error,
    }),
    [client, isLoading, error],
  );

  if (isLoading) {
    return <Text>Initializing ConnectRPC client...</Text>;
  }

  if (error) {
    return <Text>Error initializing ConnectRPC client: {error.message}</Text>;
  }

  return (
    <ConsumerServiceClientContext.Provider value={contextValue}>
      {children}
    </ConsumerServiceClientContext.Provider>
  );
};