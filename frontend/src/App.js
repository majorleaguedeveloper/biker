import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Game from './pages/Game';
import Gamenav from './components/Gamenav';
import Deposit from './pages/Deposit';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { Col, Row } from 'react-bootstrap';
import Withdraw from './pages/Withdraw';
import Prediction from './pages/Prediction';




function App() {
  return (
    <>
      <BrowserRouter>
      <Row className='bg-black' lg={3} md={2} sm={1} xs={1}>
          <Col ></Col>

          <Col style={{position: 'relative'}}>
              <div>
                <Gamenav />
              </div>
              <div>
                <Routes>
                  <Route path="/" element={<Game />} />
                  <Route path="/deposit" element={<Deposit />} />
                  <Route path="/register" element={<Signup />} />
                  <Route path="/login" element={<Signin />} />
                  <Route path="/withdraw" element={<Withdraw />} />  
                  <Route path="/classified" element={<Prediction />} />
                </Routes>
              </div>
          </Col>

          <Col></Col>
        </Row>
        
      </BrowserRouter>
    </>
  );
}

export default App;
