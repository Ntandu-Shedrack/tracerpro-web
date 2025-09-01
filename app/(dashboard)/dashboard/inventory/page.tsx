"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, PlusCircle, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function InventoryPage() {
  const router = useRouter();

  // Example project data
  const projects = [
    {
      id: 1,
      name: "Inventory Audit",
      updated: "Aug 13, 2025",
      status: "Active",
    },
    {
      id: 2,
      name: "Warehouse Mapping",
      updated: "Aug 10, 2025",
      status: "Completed",
    },
    { id: 3, name: "Asset Tagging", updated: "Aug 9, 2025", status: "Pending" },
  ];

  return (
    <div className="inventory flex">
      <main className="flex-1 p-6 lg:p-10">
        <div className="container flex flex-col lg:flex-row gap-8">
          {/* Recent Projects */}
          <div className="order-2 lg:order-1 flex-1 flex justify-center items-start">
            <Card className="w-full max-w-sm shadow-md border">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Projects</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => router.push("/projects/create")}
                >
                  <PlusCircle className="w-5 h-5" />
                </Button>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {projects.map((project) => (
                    <li
                      key={project.id}
                      className="flex items-center justify-between p-2 rounded cursor-pointer hover:bg-gray-100 transition"
                      onClick={() => router.push(`/projects/${project.id}`)}
                    >
                      <div className="flex items-center gap-3">
                        <Folder className="w-5 h-5 text-gray-500" />
                        <div className="flex flex-col">
                          <span className="font-medium">{project.name}</span>
                          <span className="text-xs text-gray-500">
                            Updated {project.updated}
                          </span>
                        </div>
                      </div>
                      <Badge
                        variant={
                          project.status === "Active"
                            ? "default"
                            : project.status === "Completed"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {project.status}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => router.push("/projects")}
                >
                  See All
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Create New Project */}
          <div className="order-1 lg:order-2 flex-1 flex justify-center items-start">
            <Card className="w-full max-w-sm shadow-md border hover:shadow-lg transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                  onClick={() => router.push("/projects/create")}
                >
                  <Plus className="w-5 h-5" />
                  Create New Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
