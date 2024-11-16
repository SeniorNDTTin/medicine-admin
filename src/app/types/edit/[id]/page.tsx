"use client";

import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GoBack from "@/components/GoBack";

import { getType, updateType } from "@/services/type";
import { Button, Form, Input } from "antd";


type props = {
  params: {
    id: string
  }
};

function TypeEdit({ params }: props) {
  const id = params.id;

  const [reload, setReload] = useState(false);

  const [data, setData] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getType(id);
      setData(result);
    }
    fetchApi();
  }, [id]); 

  const handleFinish = async (values: any) => {
    await updateType(id, values);
    toast("Loại đã được xóa một cách thành công!");
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
        Chỉnh Sửa Loại
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
            <Form.Item label="Tên" name="name">
              <Input />
            </Form.Item>

            <Form.Item label="Mô tả" name="description">
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
                  Cập nhật
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