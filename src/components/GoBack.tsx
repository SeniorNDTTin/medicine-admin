import { Button } from "antd";
import React from "react";

function GoBack() {
  const handleClick = () => {
    window.history.back();
  };

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Button type="primary" onClick={handleClick}>
          Trở lại
        </Button>
      </div>
    </React.Fragment>
  );
}

export default GoBack;
