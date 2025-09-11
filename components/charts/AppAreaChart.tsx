"use client";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  furniture: {
    label: "Furniture",
    color: "var(--chart-2)",
  },
  ict: {
    label: "ICT Assets",
    color: "var(--chart-1)",
  },
  books: {
    label: "Books",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", furniture: 186, ict: 80, books: 60 },
  { month: "February", furniture: 305, ict: 200, books: 100 },
  { month: "March", furniture: 237, ict: 120, books: 60 },
  { month: "April", furniture: 73, ict: 190, books: 270 },
  { month: "May", furniture: 209, ict: 130, books: 80 },
  { month: "June", furniture: 214, ict: 140, books: 76 },
];

const AppAreaChart = () => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Total Visitors</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <defs>
            <linearGradient id="fillFurniture" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-furniture)"
                stopOpacity={0.8}
              />
              <stop
                offset="85%"
                stopColor="var(--color-furniture)"
                stopOpacity={0.1}
              />
              <stop
                offset="10%"
                stopColor="var(--color-books)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillIct" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-ict)"
                stopOpacity={0.8}
              />
              <stop
                offset="85%"
                stopColor="var(--color-ict)"
                stopOpacity={0.1}
              />
              <stop
                offset="10%"
                stopColor="var(--color-books)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="ict"
            type="natural"
            fill="url(#fillIct)"
            fillOpacity={0.4}
            stroke="var(--color-ict)"
            stackId="a"
          />
          <Area
            dataKey="furniture"
            type="natural"
            fill="url(#fillFurniture)"
            fillOpacity={0.4}
            stroke="var(--color-furniture)"
            stackId="a"
          />
          <Area
            dataKey="books"
            type="natural"
            fill="url(#fillBooks)"
            fillOpacity={0.4}
            stroke="var(--color-books)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default AppAreaChart;
