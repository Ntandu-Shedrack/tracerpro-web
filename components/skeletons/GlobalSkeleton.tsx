"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function GlobalSkeleton() {
  return (
    <div className="flex min-h-screen flex-col gap-4 p-8">
      {/* Navbar skeleton */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>

      {/* Content skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Skeleton className="h-40 w-full rounded-xl" />
        <Skeleton className="h-40 w-full rounded-xl" />
        <Skeleton className="h-40 w-full rounded-xl" />
      </div>
    </div>
  );
}
