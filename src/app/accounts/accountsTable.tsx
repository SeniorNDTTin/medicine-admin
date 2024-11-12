"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button, Space, Table } from "antd";
import { deleteType, getTypes } from "@/services/type";
import { deleteAccount } from "@/services/account";

function AccountTable() {
  const router = useRouter();

  const [reload, setReload] = useState(false);

  // const [dataSource, setDataSource] = useState([]);
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const result = await getTypes();
  //     setDataSource(result);
  //   }
  //   fetchApi();
  // }, [reload]);

  const dataSource = [
    {
      id: '1',
      full_name: 'Mike',
      email: "@gmail.com",
      phone: "01342341",
      status: "status"
    },
    {
      id: '2',
      full_name: ' wfwf',
      email: "@gmail.com",
      phone: "01342341",
      status: "status"
    },
  ];

  const columns = [
    {
      title: 'Fullname',
      dataIndex: 'full_name',
      key: 'full_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
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
              setReload(!reload);
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

export default AccountTable;