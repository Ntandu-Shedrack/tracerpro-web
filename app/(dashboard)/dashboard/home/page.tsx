import AppAreaChart from "@/components/sections/AppAreaChart";
import AppPieChart from "@/components/sections/AppPieChart";

const Homepage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {/* Full-width on small, 2 cols on sm, spans 2 on lg */}
      <div className="p-6 border rounded-lg lg:col-span-2">
        <AppPieChart />
      </div>

      {/* Cards */}
      <div className="p-6 border rounded-lg">List of Projects</div>

      <div className="p-6 border rounded-lg">Grid 3</div>

      <div className="p-6 border rounded-lg">Grid 4</div>

      {/* Full-width on small, half-width on lg */}
      <div className="p-6 border rounded-lg md:col-span-2 lg:col-span-3">
        <AppAreaChart />
      </div>
    </div>
  );
};

export default Homepage;
