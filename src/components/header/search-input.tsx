"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchForm({ onClick }: { onClick?: () => void }) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/timkiem?query=${trimmed}`);
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="absolute  text-black right-0 top-full  w-[270px] ">
      <Input
        type="text "
        placeholder="Tìm kiếm ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-4 pr-10 bg-white py-1"
      />
      <Button type="submit" size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
        <Search className="h-5 w-5 text-muted-foreground" />
      </Button>
    </form>
  );
}
