// exploreApi.ts
import axios from "axios";
type Place = {
  id: number;
  name: string;
  description: string;
  rating: number;
  reviews: number;
  category: string;
  subcategory: string;
  tags: string[];
  image?: string;
   location?: string;
  distance?: number;
  bestTime?: string;
  timings?: string;
};


export const getPlaces = async (): Promise<Place[]> => {
  const res = await axios.get<Place[]>(
    "http://localhost:5000/api/getPlaces"
  );

  return res.data;
};