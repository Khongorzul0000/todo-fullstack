import {Home, Signup, Login, Navbar} from "./component"
import { Routes, BrowserRouter, Route } from "react-router-dom";
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <>
       <BrowserRouter>
        <div>
          <section>
            <Toaster position="top-right" toastOptions={{duration:3000}} />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/nav" element={<Navbar/>}/>
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
