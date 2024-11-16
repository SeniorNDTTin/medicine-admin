import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button, Space, Table } from "antd";
import { Typography } from 'antd';
const { Text } = Typography;

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getOrders } from "@/services/order";

function OrderTable() {
  const router = useRouter();

  const [reload, setReload] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getOrders();
      setData(result);
    };
    fetchData();
  }, [reload]);

  const columns = [
    {
      title: "Tên",
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: "SĐT",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Trạng thái",
      key: "status",
      render: (_: any, record: any) => {
        if (record.status === "UNPAID") {
          return <Text type="warning">Chưa thanh toán</Text>
        } else {
          return <Text type="success">Đã thanh toán</Text>
        }
      }
    },
    {
      title: "Tổng tiền",
      dataIndex: "total_price",
      key: "total_price",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_: any, record: any) => (
        <Space>
          <Button
            type="primary"
            style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
            onClick={() => router.push(`/orders/detail/${record.id}`)}
          >
            Xem
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <React.Fragment>
      <ToastContainer />

      <h1
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: "#333",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Danh Sách Đơn Hàng
      </h1>

      <Table dataSource={data} columns={columns} />;
    </React.Fragment>
  );
}

export default OrderTable;
