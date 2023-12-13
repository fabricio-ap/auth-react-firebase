import { AuthProvider } from './context';
import { Router } from './routes';
import './theme/reset.scss';

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
