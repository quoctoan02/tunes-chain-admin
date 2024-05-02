import { Space, Table, TableColumnsType } from "antd";
import ImagePrimary from "@/libs/image";
import moment from "moment";
import { useEffect, useState } from "react";
import { Service } from "@/services";
import { BaseRecord } from "@refinedev/core";
import VerifyButton from "@/libs/verify-button";
import DeleteButton from "@/libs/delete-button";
import { toast } from "react-toastify";

export const UnverifiedArtistList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);
  const handlePagination = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
  };
  const [data, setData] = useState();
  const buildData = async () => {
    let { total, data } = await Service.listUnverifiedArtist({
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
  const handleVerify = async (data: any) => {
    console.log(
      "🚀 ~ handleVerify ~ await Service.verifyArtist({ artistId: data.id, verified: true }):",
      await Service.verifyArtist({ artistId: data.id, verified: true })
    );

    if (await Service.verifyArtist({ artistId: data.id, verified: true }))
      toast.success("Verify artist successfully");
    setTotal(total - 1);
  };
  const handleReject = async (data: any) => {
    if (await Service.verifyArtist({ artistId: data.id, verified: false }))
      toast.success("Reject artist successfully");
    setTotal(total - 1);
  };
  useEffect(() => {
    buildData();
    return () => {};
  }, [page, pageSize, total]);

  const columns: TableColumnsType = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      render: (url: string) => (
        <ImagePrimary
          style={{ height: "40px", width: "40px", borderRadius: "100%" }}
          src={url}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },

    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record: BaseRecord) => (
        <Space>
          <VerifyButton onConfirm={handleVerify} data={record} />
          <DeleteButton onDelete={handleReject} data={record} />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ onChange: handlePagination, total: total }}
      />
    </div>
  );
};
