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
      toast.error("Có lỗi xảy ra!");
      return;
    }

    router.push("/products");
    toast.success("Sản phẩm đã được tạo mới một cách thành công!");
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
        Thêm Sản Phẩm
      </h1>

      <Form
        form={form}
        name="basic"
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

        <Form.Item label="Ngày" name="expiry">
          <Input type="date" />
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
  );
}
