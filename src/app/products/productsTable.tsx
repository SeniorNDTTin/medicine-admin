import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button, Image, Modal, Space, Table } from "antd";

import { deleteProduct, getProducts } from "@/services/product";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductsTable() {
  const router = useRouter();

  const [reload, setReload] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productIdDeleted, setProductIdDeleted] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts();
      setData(result);
    };
    fetchData();
  }, [reload]);

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
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tên khoa học",
      dataIndex: "scientific_name",
      key: "scientific_name",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Số lượng",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_: any, record: any) => (
        <Space>
          <Button
            type="primary"
            style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
            onClick={() => router.push(`/products/detail/${record.id}`)}
          >
            Xem
          </Button>
          <Button
            type="primary"
            style={{ backgroundColor: "#ffa940", borderColor: "#ffa940" }}
            onClick={() => router.push(`/products/edit/${record.id}`)}
          >
            Sửa
          </Button>
          <Button
            type="primary"
            danger
            style={{ backgroundColor: "#f5222d", borderColor: "#f5222d" }}
            onClick={() => {
              setProductIdDeleted(record.id);
              showModal();
            }}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    if (productIdDeleted) {
      await deleteProduct(productIdDeleted);
      toast.success("Sản phẩm đã được xóa một cách thành công!");
    } else {
      toast.error("Có lỗi xảy ra!");
    }

    handleCancel();
    setReload(!reload);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
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
        Danh Sách Sản Phẩm
      </h1>

      <Modal
        title="Bạn có chắc muốn xóa sản phẩm này không?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
      <Table dataSource={data} columns={columns} />;
    </React.Fragment>
  );
}

export default ProductsTable;
