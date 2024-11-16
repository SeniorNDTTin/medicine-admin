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
    await updateProduct(id, values);
    toast("Sản phẩm đã được cập nhật một cách thành công!");
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
        Chỉnh Sửa Sản Phẩm
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
            <Form.Item label="Tên" name="name">
              <Input />
            </Form.Item>

            <Form.Item label="Ảnh" name="image">
              <Input />
            </Form.Item>

            <Form.Item label="Tên khoa học" name="scientific_name">
              <Input />
            </Form.Item>

            <Form.Item label="Tên khác" name="other_name">
              <Input />
            </Form.Item>

            <Form.Item label="Loại" name="category_id">
              <Select>
                {types.length &&
                  types.map((item: any) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.name}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>

            <Form.Item label="Số lượng" name="stock">
              <Input type="number" />
            </Form.Item>

            <Form.Item label="Giá" name="price">
              <Input type="number" />
            </Form.Item>

            <Form.Item label="Xuất xứ" name="origin">
              <Input />
            </Form.Item>

            <Form.Item label="Ngày hết hạn" name="expiry">
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
  );
}
