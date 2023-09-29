import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./InOutForm.css";

import { TextInputField, PrimaryButton } from "../../components";
import { IoIosAddCircleOutline } from "react-icons/io";

const InOutForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    trackingNumber: "",
    from: "",
    to: "",
    subject: "",
    type: "incoming",
    attachment: null,
  });

  const onDrop = (acceptedFiles) => {
    setFormData({ ...formData, attachment: acceptedFiles[0] });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".jpg, .jpeg, .png, .pdf",
    multiple: false,
  });

  const handleTypeToggle = (type) => {
    setFormData({ ...formData, type });
  };

  return (
    <div className="content-container">
      <div className="form-container">
        <div className="titlePage">Incoming & Outgoing Form</div>
        <div className="form-row">
          <TextInputField
            labelText={"Title"}
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            width={"75%"}
          />
          <TextInputField
            labelText={"Tracking Number"}
            value={formData.trackingNumber}
            onChange={(e) =>
              setFormData({ ...formData, trackingNumber: e.target.value })
            }
            width={"23%"}
          />
        </div>
        <div className="form-row">
          <TextInputField
            labelText={"From"}
            value={formData.from}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
            width={"49%"}
          />
          <TextInputField
            labelText={"To"}
            value={formData.to}
            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
            width={"49%"}
          />
        </div>
        <div className="form-row">
          <TextInputField
            labelText={"Subject"}
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            width={"49%"}
          />
          <div className="radio-buttons">
            <PrimaryButton
              type="button"
              onClick={() => handleTypeToggle("incoming")}
              className={formData.type === "incoming" ? "active" : ""}
              buttonText={"Incoming"}
              width={"49%"}
            >
              Incoming
            </PrimaryButton>

            <PrimaryButton
              type="button"
              onClick={() => handleTypeToggle("outgoing")}
              className={formData.type === "outgoing" ? "active" : ""}
              buttonText={"Outgoing"}
              width={"47%"}
            >
              Outgoing
            </PrimaryButton>
          </div>
        </div>
        <div className="form-row">
          <div className="input-attachment-container" {...getRootProps()}>
            <div className="input-attachment">
              <IoIosAddCircleOutline size={"10%"} color="#333" />
              <div className="input-attachment-label">Attachment</div>
              <input {...getInputProps()} />
              <p>
                {formData.attachment
                  ? formData.attachment.name
                  : "Drag 'n' drop or click to select a file"}
              </p>
            </div>
          </div>
        </div>
        <div className="form-row">
          <PrimaryButton buttonText={"Clear"} type={"button"} />
          <PrimaryButton buttonText={"Submit"} type={"submit"} />
        </div>
      </div>
    </div>
  );
};

export default InOutForm;
