// exploreApi.ts
import axios from "axios";
// type Place = {
//   id: number;
//   name: string;
//   description: string;
//   rating: number;
//   reviews: number;
//   category: string;
//   subcategory: string;
//   tags: string[];
//   image?: string;
//   location?: string;
//   distance?: number;
//   bestTime?: string;
//   timings?: string;
// };

// export const getPlaces = async (
//   category?: string,
//   subcategory?: string
// ): Promise<Place[]> => {
//   const res = await axios.get<Place[]>(
//     `${import.meta.env.VITE_API_URL}/api/getPlaces`,
//     {
//       params: {
//         category,
//         subcategory,
//       },
//     }
//   );

//   return res.data;
// };


export const getPlaces = async (
  page: number,
  category?: string,
  subcategory?: string
) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/getPlaces`,
    {
      params: {
        page,
        limit: 12,
        category,
        subcategory,
      },
    }
  );

  return res.data;
}; 


export const getPlaceById = async (id: string) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/places/${id}`
  );

  return res.data;
};