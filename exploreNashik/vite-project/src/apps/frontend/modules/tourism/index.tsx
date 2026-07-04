// import { placeData } from "../.";
import { Helmet } from "react-helmet-async";
import FilterSection from "../../filter/index";
import HeroBaner from "./HeroBaner";
function Tourism() {
  return (
    <>
    <Helmet>
<title>Nashik Tourism Guide | Explore Nashik</title>

<meta
name="description"
content="Complete tourism guide of Nashik including famous places, travel tips and attractions."
/>
</Helmet>
      <HeroBaner />
      <FilterSection />
      {/* <PlaceCard place={placeData} /> */}

      {/* <TourismCard/> */}
    </>
  );
}

export default Tourism;
