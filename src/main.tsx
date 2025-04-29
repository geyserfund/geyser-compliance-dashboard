import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Import Apollo Provider and the configured client
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './apolloClient'; // Make sure path is correct

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);
