"use client";

import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GoBack from "@/components/GoBack";

import { Button, Form, Input } from "antd";
import { createType } from "@/services/type";
import { useRouter } from "next/navigation";

function TypeAdd() {
  const router = useRouter();

  const [reload, setReload] = useState(false);

  const handleFinish = async (values: any) => {
    await createType(values);
    toast("Type was updated successfully!");
    setReload(!reload);

    router.push("/types");
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
        Thêm Loại
      </h1>

      <Form
        name="basic"
        onFinish={handleFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item label="Id (Mxxx)" name="id">
          <Input />
        </Form.Item>

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
              Thêm
            </Button>
          </Form.Item>
        </div>
      </Form>

    </React.Fragment>
  )
}

export default TypeAdd;