import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

const CollectionFilters = () => {
  return (
    <div className="relative ">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search Collection..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
      />
    </div>
  );
};

export default CollectionFilters;
