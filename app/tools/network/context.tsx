import { createContext } from 'react';
import { NetworkContextValue } from './types';

export const NetworkContext = createContext<NetworkContextValue>({});
