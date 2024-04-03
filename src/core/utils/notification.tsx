import { Typography } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import { imagePaths } from "../constants";

interface CustomToastProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

const CustomToast: React.FC<CustomToastProps> = ({ title, content }) => {
  return (
    <div
      style={{
        backgroundColor: "#0F1015",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        borderRadius: "24px",
        //width: "var(--toastify-toast-width, 579px);",
      }}
    >
      <img src={imagePaths.info} alt="info" />
      <Typography variant="h5" style={{ padding: "20px" }}>
        {title}
      </Typography>
      <Typography
        marginRight={5}
        marginLeft={5}
        variant="body2"
        style={{ color: "#FFFFFFCC" }}
      >
        {content}
      </Typography>
    </div>
  );
};

const notification = (
  title: React.ReactNode,
  content: React.ReactNode,
  closeButton: boolean
) => {
  toast(<CustomToast title={title} content={content} />, {
    style: {
      // backgroundColor: "#FFF",
      backgroundColor: "#0F1015",
      color: "white",
      borderRadius: "24px",
      margin: "-40px 15px 30px 15px",
    },
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    closeButton: closeButton
      ? (props: any) => (
          <button
            className="Toastify__close-button Toastify__close-button--light"
            {...props}
            style={{
              color: "#fbfbfb",
            }}
          >
            <svg aria-hidden="true" viewBox="0 0 14 16">
              <path
                fill-rule="evenodd"
                d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
              ></path>
            </svg>
          </button>
        )
      : undefined,
  });
};

export { notification, CustomToast };
