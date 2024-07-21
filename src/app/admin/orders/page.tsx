"use client";
import {
  GetOrdersDocument,
  GetOrdersQuery,
  OrderStatus,
} from "@/__generated__/graphql";
import DataTable from "@/components/DataTable";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@apollo/client";

const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }: { row: any }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="">{formatted}</div>;
    },
  },
  {
    accessorKey: "user.name",
    header: "Customer",
  },
  {
    accessorKey: "isPaid",
    header: "Paid Status",
    cell: ({ row }: { row: any }) => {
      const status = row.getValue("isPaid");

      return (
        <div className="">
          <Badge variant={"outline"}>{status ? "Paid" : "Unpaid"}</Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "orderStatus",
    header: "Order Status",
    cell: ({ row }: { row: any }) => {
      const status = row.getValue("orderStatus");

      const formatStatus = {
        [OrderStatus.AwaitingShipment]: {
          label: "Awaiting shipment",
          type: "default",
        },
        [OrderStatus.Shipped]: {
          label: "Shipped",
          type: "secondary",
        },
        [OrderStatus.Fullfilled]: {
          label: "Fullfilled",
          type: "destructive",
        },
      }[status as OrderStatus];

      return (
        <div className="">
          <Badge
            variant={
              formatStatus?.type as
                | "default"
                | "secondary"
                | "destructive"
                | "outline"
                | null
                | undefined
            }
          >
            {formatStatus?.label}
          </Badge>
        </div>
      );
    },
  },
];

export default function OrdersPage() {
  const { data, loading } = useQuery(GetOrdersDocument);

  const ordersData =
    data?.orders?.map((order) => {
      return {
        ...order,
      };
    }) || [];
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-10">List orders</h1>
      <div className="flex max-h-[500px]">
        <DataTable columns={columns} data={ordersData} loading={loading} />
      </div>
    </div>
  );
}
