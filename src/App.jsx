import Home from "./pages/Home";
import Search from "./pages/Search";
import JobOffers from "./pages/JobOffers";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/job-offers" element={<JobOffers />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
