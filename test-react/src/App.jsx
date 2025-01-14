import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Nav from "./components/nav";


function App() {
  return (
    <div>

      <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Nav />} />
            
             
        
          </Routes>
        </BrowserRouter>
      
  
      
    </div>
  );
}

export default App;