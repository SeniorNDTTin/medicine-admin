"use client";

import React, { useEffect, useState } from "react";

import { Card, Descriptions } from "antd";

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
  }, [params]);

  console.log(product);

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
        Product Detail
      </h1>

      {product && (
        <>
          <Card
            style={{
              margin: "20px auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Name">
                {product.name}
              </Descriptions.Item>
              <Descriptions.Item label="Scientific Name">
                {product.scientific_name}
              </Descriptions.Item>
              <Descriptions.Item label="Other Name">
                {product.other_name}
              </Descriptions.Item>
              <Descriptions.Item label="Type">
                {product.type.name}
              </Descriptions.Item>
              <Descriptions.Item label="Price">
                ${product.price}
              </Descriptions.Item>
              <Descriptions.Item label="Stock">
                {product.stock} items
              </Descriptions.Item>
              <Descriptions.Item label="Origin">
                {product.origin}
              </Descriptions.Item>
              <Descriptions.Item label="Expiry">
                {product.expiry}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </>
      )}
    </React.Fragment>
  );
}
