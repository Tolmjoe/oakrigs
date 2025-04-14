
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./rootlayout/RootLayout";

import Homepage from "./pages/Homepage";
import About from "../src/pages/About"
import "../src/css/style.css";
import "../src/css/slider.css";
import "../src/css/@media.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PageUnderDevelopment from "./pages/PageUnderDevelopment";
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      
      <Route path="about" element={<About/>} />
      
      <Route path="register" element={<Register/>}/>

      <Route path="login" element={<Login/>} />
      <Route path="underdevelopment" element={<PageUnderDevelopment/>} />  
    </Route>
  ))
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
