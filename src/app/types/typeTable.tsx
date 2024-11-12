"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button, Space, Table } from "antd";

function TypeTable() {
  const router = useRouter();
  
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space>
          <Button
            type="primary"
            style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
            onClick={() => router.push(`/products/detail/${record.id}`)}
          >
            Detail
          </Button>
          <Button
            type="primary"
            style={{ backgroundColor: "#ffa940", borderColor: "#ffa940" }}
            onClick={() => router.push(`/products/edit/${record.id}`)}
          >
            Edit
          </Button>
          <Button
            type="primary"
            danger
            style={{ backgroundColor: "#f5222d", borderColor: "#f5222d" }}
            onClick={() => {console.log("OK");
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    }
  ];

  return (
    <React.Fragment>
      <Table dataSource={dataSource} columns={columns} />;
    </React.Fragment>
  )
}

export default TypeTable;