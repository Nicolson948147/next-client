import DataTable from "@/components/DataTable";

const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

export default function OrdersPage() {
  return (
    <div className="flex max-h-[500px]">
      <DataTable
        columns={columns}
        data={[
          {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
        ]}
      />
    </div>
  );
}
