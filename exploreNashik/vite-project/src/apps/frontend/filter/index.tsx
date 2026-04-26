import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

interface Item {
  id: number;
  name: string;
  category: string;
}

const data: Item[] = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
];

export default function FilterComponent() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  data.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "all" || item.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-2 space-2">
           <Label htmlFor="search">Search</Label>

        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select onValueChange={setCategory} defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Fruit">Fruit</SelectItem>
            <SelectItem value="Vegetable">Vegetable</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          onClick={() => {
            setSearch("");
            setCategory("all");
          }}
        >
          Reset
        </Button>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.category}</p>
            </CardContent>
          </Card>
        ))}

        {filtered.length === 0 && (
          <p className="text-sm text-gray-500">No results found</p>
        )}
      </div> */}
    </div>
  );
}
