import { Space, Table, TableColumnsType } from "antd";
import ImagePrimary from "@/libs/image";
import moment from "moment";
import { useEffect, useState } from "react";
import { Service } from "@/services";
import { onChange } from "react-toastify/dist/core/store";
import { DeleteButton, EditButton, ShowButton } from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { toFixedNumber, truncateAddress } from "@/utils";

export const UserList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);
  const handlePagination = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
  };
  const [data, setData] = useState();
  const buildData = async () => {
    let { total, data } = await Service.listUser({
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
      title: "Avatar",
      dataIndex: "avatar",
    },
    {
      title: "Name",
      dataIndex: "name",
      // render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
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
