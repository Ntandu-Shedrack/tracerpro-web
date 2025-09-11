import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 500 },
  { month: "Mar", users: 700 },
  { month: "Apr", users: 1100 },
  { month: "May", users: 900 },
  { month: "Jun", users: 1000 },
];

export function LineChart() {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-4">User Growth</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <ReLineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#8884d8"
                strokeWidth={2}
                dot
              />
            </ReLineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
