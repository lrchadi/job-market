import Home from "./pages/Home";
import Search from "./pages/Search";
import JobOffers from "./pages/JobOffers";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
import Admin from './admin/Admin'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/job-offers" element={<JobOffers />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/admin" element={<Admin />} ></Route>
      </Routes>
    </>
  );
}

export default App;
