import React from "react";
import { Button, Popconfirm } from "antd";
import { CheckOutlined } from "@ant-design/icons";

interface ButtonProps {
  onConfirm: (data: any) => void;
  data: any;
}
// This is a simple delete button with a confirmation prompt
const VerifyButton: React.FC<ButtonProps> = ({ onConfirm, data }) => {
  return (
    <Popconfirm
      title="Are you sure you want to verify this item?"
      onConfirm={() => onConfirm(data)}
      okText="Yes"
      cancelText="No"
    >
      <Button
        type="primary" // You can also use 'primary' or 'danger' based on the context
        icon={<CheckOutlined />} // Custom icon
      ></Button>
    </Popconfirm>
  );
};

export default VerifyButton;
