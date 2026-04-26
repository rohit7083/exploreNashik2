import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, MapPin } from "lucide-react";
import React from "react";

interface Place {
  id: number;
  name: string;
  image: string;
  category: string;
  distance_from_nashik_km: number;
  description: string;
  map_link?: string;
  wikipedia?: string;
}

type Props = {
  place: Place;
};

const TourismCard: React.FC<Props> = ({ place }) => {
  return (
    <>
      <div className="mt-10 mx-5 mb-6">
  <h2 className="text-xl font-bold">Tourist Places</h2>
</div>
      <Card className="w-80 mx-5 border border-black rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
        <img
          alt={place.name}
          src={place.image}
          className="w-full h-48 object-cover"
        />
        <CardContent>
          <Badge variant="orange">{place.category}</Badge>
          <h3 className="text-base font-semibold mt-2">{place.name}</h3>
          <p className="text-sm text-muted-foreground">
            {place.distance_from_nashik_km} km from Nashik
          </p>
          <p className="text-sm mt-2 line-clamp-2">{place.description}</p>
          <div className="flex gap-2 mt-4">
            <Button className="flex-1 bg-black hover:bg-gray-800">
              View Details
            </Button>

            {place.map_link && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(place.map_link, "_blank")}
              >
                <MapPin size={18} />
              </Button>
            )}

            {place.wikipedia && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(place.wikipedia, "_blank")}
              >
                <BookOpen size={18} />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default TourismCard;
