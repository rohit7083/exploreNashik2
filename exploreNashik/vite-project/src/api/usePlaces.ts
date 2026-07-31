import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPlaceBySlug, getPlaces } from "./exploreApi";

type Lang = "en" | "mr" | "hi";

const mapPlace = (p: any, lang: Lang = "en") => {
  const t = p.translations?.[lang] || p.translations?.en || {};
  return {
    ...p,
    name: t.name || p.name,
    description: t.description || p.description,
    location: t.location || p.location,
    entryFee: p.entry_fee,
  };
};

export const usePlaces = (category?: string, subcategory?: string) => {
  return useInfiniteQuery({
    queryKey: ["places", category, subcategory],
    queryFn: ({ pageParam = 1 }) =>
      getPlaces(pageParam, category, subcategory),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.page + 1 : undefined,
    select: (data) => ({
      ...data,
      pages: data.pages.map((page) => ({
        ...page,
        places: page.places.map((p: any) => mapPlace(p, "en")),
      })),
    }),
  });
};

export const usePlace = (slug: string, lang: Lang) => {
  return useQuery({
    queryKey: ["place", slug, lang],
    queryFn: () => getPlaceBySlug(slug),
    enabled: !!slug,
    select: (data) => mapPlace(data, lang),
  });
};
