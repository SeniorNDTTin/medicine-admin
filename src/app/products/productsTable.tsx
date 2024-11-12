import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button, Modal, Space, Table } from "antd";

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
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Scientific Name",
      dataIndex: "scientific_name",
      key: "scientific_name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space>
          <Button
            type="primary"
            style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
            onClick={() => router.push(`/products/detail/${record.id}`)}
          >
            Detail
          </Button>
          <Button
            type="primary"
            style={{ backgroundColor: "#ffa940", borderColor: "#ffa940" }}
            onClick={() => router.push(`/products/edit/${record.id}`)}
          >
            Edit
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
            Delete
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
      toast.success("Product deleted successfully");
    } else {
      toast.error("Product id is missing to delete");
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
      <Modal
        title="Are you sure to delete this product?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
      <Table dataSource={data} columns={columns} />;
    </React.Fragment>
  );
}

export default ProductsTable;
