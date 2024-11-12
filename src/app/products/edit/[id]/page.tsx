"use client";

import React, { useEffect, useState } from "react";

import {
  Button,
  Form,
  Input,
  Select,
} from "antd";

import { getProduct, updateProduct } from "@/services/product";
import { getTypes } from "@/services/type";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoBack from "@/components/GoBack";

export default function ProductEdit({ params }: { params: { id: string } }) {
  const id = params.id;

  const [form] = Form.useForm();

  const [reload, setReload] = useState(false);
  const [product, setProduct] = useState<any>();
  const [types, setTypes] = useState<any>();
  const [selectType, setSelectType] = useState<any>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const product = await getProduct(id);
      const types = await getTypes();

      setProduct(product);
      setTypes(types);
    };
    fetchApi();
  }, [params, reload, id]);

  const handleSubmit = async (values: any) => {
    const result = await updateProduct(id, values);
    toast("Product was updated successfully!");
    setReload(!reload);
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
        Product Edit
      </h1>

      {product && (
        <>
          <Form
            form={form}
            name="basic"
            initialValues={product}
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
                  Update
                </Button>
              </Form.Item>
            </div>
          </Form>
        </>
      )}
    </React.Fragment>
  );
}
