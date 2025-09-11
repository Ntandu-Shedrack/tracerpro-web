"use client";

import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";

const chartConfig = {
  assets: {
    label: "Assets",
  },
  furniture: {
    label: "Furniture",
    color: "var(--chart-1)",
  },
  ict: {
    label: "ICT",
    color: "var(--chart-2)",
  },
  books: {
    label: "Books",
    color: "var(--chart-3)",
  },
  other: {
    label: "Other",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const chartData = [
  { browser: "furniture", assets: 275, fill: "var(--color-furniture)" },
  { browser: "ict", assets: 200, fill: "var(--color-ict)" },
  { browser: "books", assets: 287, fill: "var(--color-books)" },
  { browser: "other", assets: 40, fill: "var(--color-other)" },
];

const AppPieChart = () => {
  // If you don't use React compiler use useMemo hook to improve performance
  const totalAssets = chartData.reduce((acc, curr) => acc + curr.assets, 0);

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Total Assets</h1>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="assets"
            nameKey="browser"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalAssets.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Assets
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="mt-4 flex flex-col gap-2 items-center">
        <div className="flex items-center gap-2 font-medium leading-none">
          Going up by 5.2% this month{" "}
          <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total assets for all the projects
        </div>
      </div>
    </div>
  );
};

export default AppPieChart;
