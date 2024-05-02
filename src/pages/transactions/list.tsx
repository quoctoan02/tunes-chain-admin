import { Space, Table, TableColumnsType } from "antd";
import ImagePrimary from "@/libs/image";
import moment from "moment";
import { useEffect, useState } from "react";
import { Service } from "@/services";
import { onChange } from "react-toastify/dist/core/store";
import { DeleteButton, EditButton, ShowButton } from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { toFixedNumber, truncateAddress } from "@/utils";

export const TransactionList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);
  const handlePagination = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
  };
  const [data, setData] = useState();
  const buildData = async () => {
    let { total, data } = await Service.listTransaction({
      limit: pageSize,
      offset: page - 1,
    });
    setData(
      data.map((item: any) => {
        return {
          ...item,
          key: item.id,
        };
      })
    );
    setTotal(total);
  };
  useEffect(() => {
    buildData();
    return () => {};
  }, [page, pageSize]);
  const columns: TableColumnsType = [
    {
      title: "User address",
      dataIndex: "userAddress",
      render: (text: string) => <span>{truncateAddress(text, 5)}</span>,
    },
    {
      title: "Transaction hash",
      dataIndex: "transactionHash",
      render: (text: string) => <a className="truncate"> {text}</a>,
    },
    {
      title: "Song",
      dataIndex: "song",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text: string) => toFixedNumber(+text, 2),
    },
    {
      title: "Bought at",
      dataIndex: "boughtAt",
      render: (date: Date) => moment(date).format("hh:mm DD-MM-YYYY"),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record: BaseRecord) => (
        <Space>
          <EditButton hideText size="small" recordItemId={record.id} />
          <ShowButton hideText size="small" recordItemId={record.id} />
          <DeleteButton hideText size="small" recordItemId={record.id} />
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ onChange: handlePagination, total: total }}
    />
  );
};
