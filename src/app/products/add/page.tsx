"use client";

import React, { useEffect, useState } from "react";

import { Button, Form, Input, Select } from "antd";

import { getTypes } from "@/services/type";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createProduct } from "@/services/product";
import { useRouter } from "next/navigation";
import GoBack from "@/components/GoBack";

export default function ProductAdd() {
  const router = useRouter();

  const [form] = Form.useForm();

  const [reload, setReload] = useState(false);
  const [types, setTypes] = useState<any>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const types = await getTypes();

      setTypes(types);
    };
    fetchApi();
  }, [reload]);

  const handleSubmit = async (values: any) => {
    values.price = parseFloat(values.price);
    values.stock = parseInt(values.stock);

    const result = await createProduct(values);

    if (!result.name) {
      toast.error("Product was added failed!");
      return;
    }

    router.push("/products");
    toast.success("Product was added successfully!");
  };

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
        Product Add
      </h1>

      <Form
        form={form}
        name="basic"
        onFinish={handleSubmit}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Scientific Name" name="scientific_name">
          <Input />
        </Form.Item>

        <Form.Item label="Other Name" name="other_name">
          <Input />
        </Form.Item>

        <Form.Item label="Type Name" name="category_id">
          <Select>
            {types.length &&
              types.map((item: any) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item label="Stock" name="stock">
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Price" name="price">
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Origin" name="origin">
          <Input />
        </Form.Item>

        <Form.Item label="Expiry" name="expiry">
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
              Add
            </Button>
          </Form.Item>
        </div>
      </Form>
    </React.Fragment>
  );
}
