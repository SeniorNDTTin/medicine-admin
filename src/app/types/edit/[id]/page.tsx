"use client";

import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GoBack from "@/components/GoBack";

import { getType, updateType } from "@/services/type";
import { Button, Form, Input } from "antd";
import { log } from "console";


type props = {
  params: {
    id: string
  }
};

function TypeEdit({ params }: props) {
  const id = params.id;

  const [reload, setReload] = useState(false);

  const data = {
    id: '1',
    name: 'Mike',
    description: "mota",
  };

  // const [data, setData] = useState();
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const result = await getType(id);
  //     setData(result);
  //   }
  //   fetchApi();
  // }, [id]); 

  const handleFinish = async (values: any) => {
    await updateType(id, values);
    toast("Type was updated successfully!");
    setReload(!reload);
  }

  return (
    <React.Fragment>
      <GoBack />

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
        Product Edit
      </h1>

      {data && (
        <>
          <Form
            name="basic"
            initialValues={data}
            onFinish={handleFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>

            <Form.Item label="Description" name="description">
              <Input />
            </Form.Item>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
              </Form.Item>
            </div>
          </Form>
        </>
      )}

    </React.Fragment>
  )
}

export default TypeEdit;