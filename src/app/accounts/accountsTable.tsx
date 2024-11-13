"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button, Space, Table } from "antd";
import { deleteType, getTypes } from "@/services/type";
import { deleteAccount, getAccounts } from "@/services/account";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AccountTable() {
  const router = useRouter();

  const [reload, setReload] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      title: "Fullname",
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space>
          <Button
            type="primary"
            danger
            style={{ backgroundColor: "#f5222d", borderColor: "#f5222d" }}
            onClick={async () => {
              await deleteAccount(record.id);

              toast.success("Delete account successfully");
              setReload(!reload);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <React.Fragment>
      <ToastContainer />
      <Table dataSource={dataSource} columns={columns} />;
    </React.Fragment>
  );
}

export default AccountTable;
