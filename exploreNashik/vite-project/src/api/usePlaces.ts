import { useQuery } from "@tanstack/react-query";
import { getPlaceById, getPlaces } from "./exploreApi";

export const usePlaces = (
  category?: string,
  subcategory?: string
) => {
  return useQuery({
    queryKey: ["places", category, subcategory],
    queryFn: () => getPlaces(category, subcategory),
  });
};


export const usePlace = (id: string) => {
  return useQuery({
    queryKey: ["place", id],
    queryFn: () => getPlaceById(id),
    enabled: !!id,
  });
};