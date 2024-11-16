"use client";

import React, { useEffect, useState } from "react";

import { Card, Descriptions, Image, Table } from "antd";
import { Typography } from 'antd';
const { Text } = Typography;


import GoBack from "@/components/GoBack";
import { getOrder } from "@/services/order";
import { getOrderDetails } from "@/services/orderDetail";
import { getProduct } from "@/services/product";
import { formatVND } from "@/helpers/formatCurrency";

function OrderDetail({ params }: { params: { id: string } }) {
  const id = params.id;

  const [order, setOrder] = useState<any>();
  const [orderDetail, setOrderDetail] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const order = await getOrder(id);

      const orderDetails = await getOrderDetails(order.id);

      const products = [];
      for (const item of orderDetails) {
        const product = await getProduct(item.product_id);
        products.push({
          ...product,
          quantity: item.quantity
        });
      }

      setOrder(order);
      setOrderDetail(orderDetails);
      setProducts(products);
    };
    fetchApi();
  }, [id]);

  const columns = [
    {
      title: "Ảnh",
      key: "image",
      render: (_: any, record: any) => (
        <div style={{ width: "60%" }}>
          <Image
            src={record.image}
            alt={record.name}
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
          />
        </div>
      )
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
    }
  ];

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
        Chi Tiết Đơn Hàng
      </h1>

      {order && (
        <>
          <Text type="success">Thông tin cá nhân</Text>

          <Card
            style={{
              margin: "20px auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Họ và tên">
                {order.full_name}
              </Descriptions.Item>
              <Descriptions.Item label="Số điện thoại">
                {order.phone}
              </Descriptions.Item>
              <Descriptions.Item label="Địa chỉ">
                {order.address}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </>
      )}

      {products.length && (
        <>
          <Text type="success">Chi tiết đơn hàng</Text>
          <Table dataSource={products} columns={columns} />
        </>
      )}

      {order && (
        <div style={{
          display: "flex",
          justifyContent: "end"
        }}>
          <Text type="success" style={{
            fontWeight: "bold",
            fontSize: "36px"
          }}>
            Tổng tiền: {formatVND(order.total_price)}
          </Text>
        </div>
      )}

    </React.Fragment>
  );
}

export default OrderDetail;