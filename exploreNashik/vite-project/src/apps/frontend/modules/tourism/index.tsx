// import { placeData } from "../.";
import SEO from "../../../../components/seo/SEO";
import FilterSection from "../../filter/index";
import HeroBaner from "./HeroBaner";
function Tourism() {
  return (
    <>
 <SEO
title="Nashik Tourism Guide | Explore Nashik"
description="Complete tourism guide of Nashik including famous places, travel tips and attractions."
url="https://explorenashik.in/tourism"
/>
      <HeroBaner />
      <FilterSection />
      {/* <PlaceCard place={placeData} /> */}

      {/* <TourismCard/> */}
    </>
  );
}

export default Tourism;
