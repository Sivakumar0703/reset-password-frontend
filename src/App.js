
import './App.css';
import ForgotPassword from './forgotPassword/ForgotPassword';
import {BrowserRouter , Route , Routes} from 'react-router-dom' ;
import ResetPassword from './resetPassword/ResetPassword';
import Errorpage from './Errorpage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ForgotPassword />} />
        <Route path="reset_password/:verification/:token" element={<ResetPassword />} />
        <Route path='/*' element={<Errorpage />} />
      </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
