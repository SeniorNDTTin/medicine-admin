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
          Go Back
        </Button>
      </div>
    </React.Fragment>
  );
}

export default GoBack;
