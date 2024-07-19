import Bottle from "@/components/Bottles";
import { get5Bottles } from "@/server/db/actions";
import {
  dehydrate,
  QueryClient,
  HydrationBoundary,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();
  // PRE FETCHING DATA
  // await queryClient.prefetchQuery({
  //   queryKey: ["bottles"],
  //   queryFn: () => get5Bottles(),
  // });

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-2xl ">Home</h1>
      <div className="mt-4">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Bottle />
        </HydrationBoundary>
      </div>
    </main>
  );
}
