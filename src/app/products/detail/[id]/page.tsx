"use client";

import React, { useEffect, useState } from "react";

import { Card, Descriptions, Image } from "antd";

import { getProduct } from "@/services/product";
import { getType } from "@/services/type";
import GoBack from "@/components/GoBack";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const id = params.id;

  const [product, setProduct] = useState<any>();

  useEffect(() => {
    const fetchApi = async () => {
      const product = await getProduct(id);

      product.type = await getType(product.category_id);

      setProduct(product);
    };
    fetchApi();
  }, [id]);

  return (
    <React.Fragment>
      <GoBack />

      <h1
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: "#333",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Chi Tiết Sản Phẩm
      </h1>

      {product && (
        <>
          <div style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Image src={product.image} alt={product.name} />
          </div>

          <Card
            style={{
              margin: "20px auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Tên">
                {product.name}
              </Descriptions.Item>
              <Descriptions.Item label="Tên khoa học">
                {product.scientific_name}
              </Descriptions.Item>
              <Descriptions.Item label="Tên khác">
                {product.other_name}
              </Descriptions.Item>
              <Descriptions.Item label="Loại">
                {product.type.name}
              </Descriptions.Item>
              <Descriptions.Item label="Giá">
                ${product.price}
              </Descriptions.Item>
              <Descriptions.Item label="Số lượng">
                {product.stock} items
              </Descriptions.Item>
              <Descriptions.Item label="Xuất xứ">
                {product.origin}
              </Descriptions.Item>
              <Descriptions.Item label="Ngày hết hạn">
                {product.expiry}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </>
      )}
    </React.Fragment>
  );
}
