import { useQuery } from "@tanstack/react-query";
import { getPlaces } from "./exploreApi";

export const usePlaces = () => {
  return useQuery({
    queryKey: ["places"],
    queryFn: getPlaces,
  });
};