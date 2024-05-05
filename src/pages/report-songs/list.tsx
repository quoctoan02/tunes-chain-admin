import { Space, Table, TableColumnsType } from "antd";
import ImagePrimary from "@/libs/image";
import moment from "moment";
import { useEffect, useState } from "react";
import { Service } from "@/services";
import { onChange } from "react-toastify/dist/core/store";
import { toFixedNumber } from "@/utils";
import { BaseRecord } from "@refinedev/core";
import VerifyButton from "@/libs/verify-button";
import DeleteButton from "@/libs/delete-button";
import { toast } from "react-toastify";

export const ReportSongList = () => {
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
    let { total, data } = await Service.listReportSong({
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
  }, [page, pageSize, total]);

  const handleVerify = async (data: any) => {
    if (await Service.verifyReport({ reportId: data.id, verified: true }))
      toast.success("Verify artist successfully");
    setTotal(total - 1);
  };
  const handleReject = async (data: any) => {
    if (await Service.verifyReport({ reportId: data.id, verified: false }))
      toast.success("Reject artist successfully");
    setTotal(total - 1);
  };
  const columns: TableColumnsType = [
    {
      title: "song",
      dataIndex: "songName",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "user",
      dataIndex: "address",
    },
    {
      title: "type",
      dataIndex: "type",
    },
    {
      title: "description",
      dataIndex: "description",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record: BaseRecord) => (
        <Space>
          <VerifyButton data={record} onConfirm={handleVerify} />
          <DeleteButton data={record} onDelete={handleReject} />
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
