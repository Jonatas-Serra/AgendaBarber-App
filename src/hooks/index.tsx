import React from 'react';

import { AuthProvider } from './Auth';

interface Props {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
