import React from "react";
import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

interface DeleteButtonProps {
  onDelete: (data: any) => void;
  data: any;
}
// This is a simple delete button with a confirmation prompt
const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete, data }) => {
  return (
    <Popconfirm
      title="Are you sure you want to delete this item?"
      onConfirm={() => onDelete(data)}
      okText="Yes"
      cancelText="No"
    >
      <Button
        type="default" // You can also use 'primary' or 'danger' based on the context
        icon={<DeleteOutlined />} // Custom icon
        danger // Sets the color to a red variant for "danger" context
      ></Button>
    </Popconfirm>
  );
};

export default DeleteButton;
