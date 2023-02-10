import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App({ children }) {
  return (
    <div>
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
