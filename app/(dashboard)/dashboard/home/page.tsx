import AppAreaChart from "@/components/sections/AppAreaChart";
// import AppPieChart from "@/components/sections/AppPieChart";
import CardList from "@/components/sections/CardList";
import { ChartPieSeparatorNone } from "@/components/sections/PieChart";

const Homepage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {/* Full-width on small, 2 cols on sm, spans 2 on lg */}
      <div className="border p-6 rounded-lg lg:col-span-2">Grid 1</div>

      {/* Cards */}
      <div className="border p-6 rounded-lg">
        <CardList title="Latest Transactions" />
      </div>

      <div className="border p-6 rounded-lg">
        <ChartPieSeparatorNone />
      </div>

      <div className="border p-6 rounded-lg">
        <CardList title="Recent Activities" />
      </div>

      {/* Full-width on small, half-width on lg */}
      <div className="border p-4 rounded-lg md:col-span-2 lg:col-span-3">
        <AppAreaChart />
      </div>
    </div>
  );
};

export default Homepage;
