import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    manager: "ByWind",
    date: "Jun 26, 2025",
    amount: "$942.00",
    status: "In Progress",
  },
  {
    manager: "Nathil Craig",
    date: "Mar 10, 2025",
    amount: "$881.00",
    status: "Complete",
  },
  {
    manager: "Drew Cano",
    date: "Nov 10, 2025",
    amount: "$409.00",
    status: "Pending",
  },
  {
    manager: "Orlando Diggs",
    date: "Dec 20, 2025",
    amount: "$913.00",
    status: "Approved",
  },
  {
    manager: "Andi Lane",
    date: "Jul 25, 2025",
    amount: "$970.00",
    status: "Rejected",
  },
];

const statusColors: Record<string, string> = {
  "In Progress": "bg-blue-500",
  Complete: "bg-green-500",
  Pending: "bg-yellow-500",
  Approved: "bg-emerald-500",
  Rejected: "bg-red-500",
};

export function ProjectsTable() {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-4">Projects</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Manager</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-2">{p.manager}</td>
                <td>{p.date}</td>
                <td>{p.amount}</td>
                <td>
                  <Badge className={`${statusColors[p.status]} text-white`}>
                    {p.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
