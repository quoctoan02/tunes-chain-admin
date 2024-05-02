import { Space, Table, TableColumnsType } from "antd";
import ImagePrimary from "@/libs/image";
import moment from "moment";
import { useEffect, useState } from "react";
import { Service } from "@/services";
import { onChange } from "react-toastify/dist/core/store";
import { toFixedNumber } from "@/utils";
import { BaseRecord } from "@refinedev/core";
import DeleteButton from "@/libs/delete-button";
import VerifyButton from "@/libs/verify-button";

export const SongList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);
  const handlePagination = (page: number, pageSize: number) => {
    console.log("🚀 ~ handlePagination ~ pageSize:", pageSize);
    console.log("🚀 ~ handlePagination ~ page:", page);
    setPage(page);
    setPageSize(pageSize);
  };
  const [data, setData] = useState();
  const buildData = async () => {
    let { total, data } = await Service.listSong({
      limit: pageSize,
      offset: pageSize * (page - 1),
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
      title: "Name",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Album",
      dataIndex: "albumName",
    },
    {
      title: "Artist",
      dataIndex: "albumName",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text: string) => toFixedNumber(+text, 2),
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    // {
    //   title: "Actions",
    //   dataIndex: "actions",
    //   render: (_, record: BaseRecord) => (
    //     <Space>
    //       <VerifyButton />
    //       <DeleteButton />
    //     </Space>
    //   ),
    // },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ onChange: handlePagination, total: total }}
    />
  );
};
