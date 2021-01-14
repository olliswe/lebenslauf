import React from "react";
import { Modal } from "antd";
import usePreviewCVStore from "stores/usePreviewCVStore";

const CvPreview = () => {
  const previewCV = usePreviewCVStore((state) => state.previewCV);
  const setPreviewCV = usePreviewCVStore((state) => state.setPreviewCV);

  const handleClose = () => setPreviewCV("");

  return (
    <Modal
      visible={!!previewCV}
      onCancel={handleClose}
      width={"60%"}
      footer={null}
    >
      <div style={{ padding: "15px" }}>
        <iframe
          frameBorder={0}
          title="cv-preview"
          srcDoc={previewCV}
          style={{ width: "100%", height: "100vh" }}
        />
      </div>
    </Modal>
  );
};

export default CvPreview;
