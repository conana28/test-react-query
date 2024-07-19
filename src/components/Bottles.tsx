"use client";

import { get5Bottles } from "@/server/db/actions";
import { useQuery } from "@tanstack/react-query";

export default function Bottle() {
  const { data, error } = useQuery({
    queryKey: ["bottles"],
    queryFn: () => get5Bottles(),
  });

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.data?.map((bottle) => (
        <div key={bottle.id}>
          {bottle.vintage} {bottle.wine.producer} {bottle.rack}
        </div>
      ))}
    </div>
  );
}
