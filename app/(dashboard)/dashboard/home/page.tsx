"use client";

import { StatCard } from "@/components/sections/StatCard";
import { LineChart } from "@/components/charts/LineChart";
import { TrafficChart } from "@/components/charts/TrafficChart";
import { ProductTraffic } from "@/components/charts/ProductTraffic";
import { ProjectsTable } from "@/components/charts/ProjectsTable";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Views" value="7,265" change="+11.01%" positive />
        <StatCard title="Visits" value="3,671" change="-0.03%" />
        <StatCard title="New Users" value="256" change="+15.03%" positive />
        <StatCard title="Active Users" value="2,318" change="+6.08%" positive />
      </div>

      {/* User Growth Line Chart */}
      <LineChart />

      {/* Device & Location Traffic */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TrafficChart
          title="Device Traffic"
          labels={["Linux", "Mac", "iOS", "Windows", "Android", "Other"]}
        />
        <TrafficChart
          title="Location Traffic"
          labels={["US", "Canada", "Mexico", "China", "Japan", "Australia"]}
        />
      </div>

      {/* Product Traffic */}
      <ProductTraffic />

      {/* Projects Table */}
      <ProjectsTable />
    </div>
  );
}
