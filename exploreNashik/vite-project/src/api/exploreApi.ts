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

export const getPlaces = async (
  category?: string,
  subcategory?: string
): Promise<Place[]> => {
  const res = await axios.get<Place[]>(
    `${import.meta.env.VITE_API_URL}/api/getPlaces`,
    {
      params: {
        category,
        subcategory,
      },
    }
  );

  return res.data;
};