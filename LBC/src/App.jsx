import React, { useState, useEffect } from "react";
import { Navbar } from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import A from "./Components/About";
import B from './Components/Contact';
import LoadingPage from './Components/Loading';
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Cart from "./Components/Cart";
import {Leatherbag,Leatherbelts,Leathergloves,Leatherjackets,Leatherkeychains,Leathernotebookcovers,Leatherphonecases,Leathershoes,Leatherwallets,Leatherwatchstraps} from './Products/Leather'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/b" element={<A />} />
        <Route path="/a" element={<B />} />
        <Route path="/leatherbag" element={<Leatherbag/>} />
        <Route path="/leatherbelts" element={<Leatherbelts/>} />
        <Route path="/leathergloves" element={<Leathergloves/>} />
        <Route path="/leatherjackets" element={<Leatherjackets/>} />
        <Route path="/leatherkeychains" element={<Leatherkeychains/>} />
        <Route path="/leathernotebookcovers" element={<Leathernotebookcovers/>} />
        <Route path="/leatherphonecases" element={<Leatherphonecases/>} />
        <Route path="/leathershoes" element={<Leathershoes/>} />
        <Route path="/leatherwallets" element={<Leatherwallets/>} />
        <Route path="/leatherwatchstraps" element={<Leatherwatchstraps/>} />
        <Route path="/cart" element={<Cart/>} />


      </Routes>
      <Footer/>
    </>
  );
}

export default App;

