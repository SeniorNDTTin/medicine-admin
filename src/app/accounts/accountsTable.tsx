"use client";

import React, { useEffect, useState } from "react";

import { Button, Space, Table } from "antd";
import { deleteAccount, getAccounts } from "@/services/account";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AccountTable() {

  const [reload, setReload] = useState(false);

  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getAccounts();
      setDataSource(result);
    };
    fetchApi();
  }, [reload]);

  const columns = [
    {
      title: "Họ tên",
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "SĐT",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_: any, record: any) => (
        <Space>
          <Button
            type="primary"
            danger
            style={{ backgroundColor: "#f5222d", borderColor: "#f5222d" }}
            onClick={async () => {
              await deleteAccount(record.id);

              toast.success("Tài khoản đã được xóa một cách thành công!");
              setReload(!reload);
            }}
          >
            Xóa
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
        Danh Sách Tài Khoản
      </h1>

      <Table dataSource={dataSource} columns={columns} />;
    </React.Fragment>
  );
}

export default AccountTable;
