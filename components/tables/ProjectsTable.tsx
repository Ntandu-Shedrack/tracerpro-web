"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { DownloadIcon, Pencil, Plus, Trash } from "lucide-react";
import { DataTable } from "../sections/DataTable";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ProjectForm } from "../forms/ProjectForm";
import { createProjectSchema } from "@/types/project";

// Define Project type
type Project = {
  id: number;
  name: string;
  idNo: string;
  year: string;
};

// Dummy data
const dummyProjects: Project[] = [
  {
    id: 1,
    name: "2023/24 Financial Year",
    idNo: "FN2024/25",
    year: "2023",
  },
  {
    id: 2,
    name: "2024/25 Financial Year",
    idNo: "FN2025/26",
    year: "2024",
  },
];

// Table columns
const columns: ColumnDef<Project>[] = [
  { accessorKey: "name", header: "Project Name" },
  { accessorKey: "idNo", header: "Project ID Number" },
  { accessorKey: "year", header: "Project Year" },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const project = row.original;
      return (
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => alert(`Edit ${project.name}`)}
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => alert(`Delete ${project.name}`)}
          >
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];

export default function ProjectsPage() {
  return (
    <DataTable
      title="Projects List"
      columns={columns}
      data={dummyProjects}
      searchPlaceholder="Search projects..."
      toolbarActions={
        <>
          {/* Download button */}
          <Button variant="outline" onClick={() => console.log("Download...")}>
            <DownloadIcon className="w-4 h-4" />
          </Button>

          {/* Add Project dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-1">
                <Plus className="h-4 w-4" /> Project
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle hidden>Create New Project</DialogTitle>
                <DialogDescription hidden>
                  Fill in the details below to create a new project.
                </DialogDescription>
              </DialogHeader>

              <ProjectForm
                mode="create"
                schema={createProjectSchema}
                onSubmitHandler={async (values) => {
                  console.log("Project submitted:", values);
                }}
              />
            </DialogContent>
          </Dialog>
        </>
      }
    />
  );
}
