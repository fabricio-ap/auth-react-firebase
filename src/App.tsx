import { AuthProvider } from './context';
import { Router } from './routes';
import './theme/reset.scss';

function App() {
  return (
    <div className='text-neutral text-sm h-full'>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;
