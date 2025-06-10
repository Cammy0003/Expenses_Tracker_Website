import AppRoutes from './routes/AppRoutes.jsx';
import MainLayout from "./layouts/MainLayout.jsx";
import './App.css';
import {GlobalStateProvider} from "./context/GlobalStateContext.jsx";
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
      <BrowserRouter>
          <GlobalStateProvider>
              <MainLayout>
                  <AppRoutes />
              </MainLayout>
          </GlobalStateProvider>
      </BrowserRouter>
  )
}

export default App
