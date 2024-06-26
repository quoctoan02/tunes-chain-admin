
import {Space, Table, TableColumnsType} from "antd";
import ImagePrimary from "@/libs/image";
import moment from "moment";
import {useEffect, useState} from "react";
import { Service } from "@/services";
import { DeleteButton, EditButton, ShowButton } from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";

export const ArtistList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);
  const handlePagination = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
  };
  const [data, setData] = useState();
  const buildData = async () => {
    let { total, data } = await Service.listArtist({
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
          <DeleteButton hideText size="small" recordItemId={record.id} />
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
