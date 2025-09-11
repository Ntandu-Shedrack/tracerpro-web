import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
}

export function StatCard({ title, value, change, positive }: StatCardProps) {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
        <p
          className={`text-sm ${positive ? "text-green-500" : "text-red-500"}`}
        >
          {change}
        </p>
      </CardContent>
    </Card>
  );
}
