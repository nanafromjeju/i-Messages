import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="font-primary">
      <QueryClientProvider client={queryClient}>
        <Router>
          <AppRoutes />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
