import { useQuery } from "@tanstack/react-query";
import { getPlaces } from "./exploreApi";

export const usePlaces = (
  category?: string,
  subcategory?: string
) => {
  return useQuery({
    queryKey: ["places", category, subcategory],
    queryFn: () => getPlaces(category, subcategory),
  });
};