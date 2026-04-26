import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./apps/frontend/app/Home";
import Layout from "./apps/frontend/app/Layout";
import About from "./apps/frontend/modules/aboutus/index";
// import Contact from "./apps/frontend/modules/contact/index";
import Explore from './apps/frontend/modules/explore/index';
import History from "./apps/frontend/modules/history/index";
import KumbhaMela from "./apps/frontend/modules/kumbhMela/index";
import NearByPlace from "./apps/frontend/modules/nearByPlace/index";
import OpenCardPage from "./apps/frontend/modules/opnecardpage/index";
import Tourism from "./apps/frontend/modules/tourism/index";
import TravelInfo from "./apps/frontend/modules/travelInfo/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/nearby-place" element={<NearByPlace />} />
          <Route path="/kumbh-mela" element={<KumbhaMela />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
          <Route path="/travel-info" element={<TravelInfo/>}/>
      <Route path="/open-card" element={<OpenCardPage/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
