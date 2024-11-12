"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button, Space, Table } from "antd";
import { deleteType, getTypes } from "@/services/type";

function TypeTable() {
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
      name: 'Mike',
      description: "mota",
    },
    {
      id: '2',
      name: 'John',
      description: "mota",
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space>
          <Button
            type="primary"
            style={{ backgroundColor: "#ffa940", borderColor: "#ffa940" }}
            onClick={() => router.push(`/types/edit/${record.id}`)}
          >
            Edit
          </Button>
          <Button
            type="primary"
            danger
            style={{ backgroundColor: "#f5222d", borderColor: "#f5222d" }}
            onClick={async () => {
              await deleteType(record.id);
              setReload(!reload);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    }
  ];

  const onClickAdd = () => {
    router.push("/types/add");
  }

  return (
    <React.Fragment>
      <div style={
        {
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
        }
      }>
        <Button
          onClick={onClickAdd}
          type="primary"
          style={{
            backgroundColor: "green",
            padding: "20px",
            fontWeight: "bold"
          }}
        >
          Add
        </Button>
      </div>

      <Table dataSource={dataSource} columns={columns} />;
    </React.Fragment>
  )
}

export default TypeTable;