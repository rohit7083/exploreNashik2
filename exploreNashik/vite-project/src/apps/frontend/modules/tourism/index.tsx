import { placeData } from "../../content/data";
import FilterSection from "../../filter/index";
import HeroBaner from "./HeroBaner";
import TourismCard from "./TourismCard";
function Tourism() {
  return (
    <>
      <HeroBaner />
      <FilterSection />
      {/* <PlaceCard place={placeData} /> */}

      <TourismCard place={placeData} />
    </>
  );
}

export default Tourism;
