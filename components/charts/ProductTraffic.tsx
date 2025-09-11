import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";

const data = Array.from({ length: 12 }, (_, i) => ({
  month: new Date(0, i).toLocaleString("default", { month: "short" }),
  all: Math.floor(Math.random() * 500),
  dashboard: Math.floor(Math.random() * 200),
}));

export function ProductTraffic() {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-4">Product Traffic</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
              <XAxis dataKey="month" />
              <Tooltip />
              <Bar dataKey="dashboard" fill="#f87171" radius={[4, 4, 0, 0]} />
              <Line
                type="monotone"
                dataKey="all"
                stroke="#6366f1"
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
