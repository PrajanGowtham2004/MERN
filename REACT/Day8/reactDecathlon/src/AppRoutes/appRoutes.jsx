import Navbar from "../components/Navbar";

import Home from "../pages/Home";
import AllSports from "../pages/Allsports";
import Mens from "../pages/Mens";
import Womens from "../pages/Womens";
import Kids from "../pages/Kids";

const AppRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mens" element={<Mens />} />
        <Route path="/Womens" element={<Womens />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/AllSports" element={<AllSports />} />
      </Routes>
    </>
  );
};

export default AppRoutes;