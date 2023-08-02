import {Home, Signup, Login} from "./component"
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
       <BrowserRouter>
        <div>
          <section>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Signup/>}/>
              <Route path="/signup" element={<Login/>}/>
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
