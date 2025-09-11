import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

interface Props {
  title: string;
  labels: string[];
}

const mockData = (labels: string[]) =>
  labels.map((label) => ({
    name: label,
    value: Math.floor(Math.random() * 300),
  }));

export function TrafficChart({ title, labels }: Props) {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData(labels)}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
