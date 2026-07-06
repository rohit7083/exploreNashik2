import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPlaceBySlug, getPlaces } from "./exploreApi";
// export const usePlaces = (
//   category?: string,
//   subcategory?: string
// ) => {
//   return useQuery({
//     queryKey: ["places", category, subcategory],
//     queryFn: () => getPlaces(category, subcategory),
//   });
// };



export const usePlaces = (
  category?: string,
  subcategory?: string
) => {
  return useInfiniteQuery({
    queryKey: ["places", category, subcategory],

    queryFn: ({ pageParam = 1 }) =>
      getPlaces(pageParam, category, subcategory),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      return lastPage.hasMore
        ? lastPage.page + 1
        : undefined;
    },
  });
};

export const usePlace = (slug: string) => {
  return useQuery({
    queryKey: ["place", slug],
    queryFn: () => getPlaceBySlug(slug),
    enabled: !!slug,
  });
};