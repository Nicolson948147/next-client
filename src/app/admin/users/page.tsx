"use client";
import { GetUsersDocument } from "@/__generated__/graphql";
import DataTable from "@/components/DataTable";
import { useQuery } from "@apollo/client";

const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

export default function UsersPage() {
  const { data, loading } = useQuery(GetUsersDocument);

  const usersData =
    data?.users?.map((user) => {
      return {
        ...user,
      };
    }) || [];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-10">List Users</h1>
      <div className="flex max-h-[500px]">
        <DataTable columns={columns} data={usersData} loading={loading} />
      </div>
    </div>
  );
}
