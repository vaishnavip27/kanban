"use client"
import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Project = {
  id: string
  name: string
  assignee: {
    name: string
    avatar: string
  }
  date: string
  updates: string
  status: "pending" | "completed" | "paused"
}

const data: Project[] = [
  {
    id: "1",
    name: "Website",
    assignee: {
      name: "A.J.",
      avatar: "/avatars/alice.jpg",
    },
    date: "2023-05-15",
    updates: "2h",
    status: "pending",
  },
  {
    id: "2",
    name: "Mobile",
    assignee: {
      name: "B.S.",
      avatar: "/avatars/bob.jpg",
    },
    date: "2023-05-14",
    updates: "1d",
    status: "completed",
  },
  {
    id: "3",
    name: "DB",
    assignee: {
      name: "C.B.",
      avatar: "/avatars/charlie.jpg",
    },
    date: "2023-05-12",
    updates: "3d",
    status: "paused",
  },
]

const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="text-xs">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "assignee",
    header: "Assigned",
    cell: ({ row }) => {
      const assignee = row.getValue("assignee") as Project["assignee"]
      return (
        <div className="flex items-center gap-1">
          <Avatar className="h-4 w-4">
            <AvatarImage src={assignee.avatar} alt={assignee.name} />
            <AvatarFallback className="text-[10px]">{assignee.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-xs">{assignee.name}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "updates",
    header: "Updated",
    cell: ({ row }) => (
      <div className="text-xs text-gray-400">{row.getValue("updates")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Button
          variant="outline"
          className={`h-5 text-[10px] px-2 ${
            status === "completed"
              ? "bg-[#6DCB95] text-black hover:bg-green-500/20 border-green-500/20"
              : status === "pending"
                ? "bg-[#E5F649] text-black hover:bg-yellow-500/20 border-yellow-500/20"
                : "bg-[#FFCB74] text-black hover:bg-gray-500/20 border-gray-500/20"
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Button>
      )
    },
  },
]

export function ProjectTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="mt-3 border border-gray-800 rounded-xl bg-black">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="border-b border-gray-800">
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="text-[10px] text-gray-400 font-normal h-10 py-0">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow 
                key={row.id} 
                className="border-b border-gray-800 hover:bg-gray-800/50"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="py-2.5 h-8">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-10 text-center text-xs text-gray-400">
                No projects found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default ProjectTable;