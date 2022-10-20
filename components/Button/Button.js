import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import Image from "next/image";

export const PrimaryButton = styled(MuiButton)((props) => ({
  fontWeight: 400,
  fontFamily: "GoldmanBold",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",
  padding: "12px 25px",
  background: "#000000",
  color: "#fff",
  textAlign: "center",
  borderRadius: "5px",
  border: "none",
  textTransform: "initial",
  "&:hover": {
    background: "#000000",
  },
}));

export const SecondaryButton = styled(MuiButton)((props) => ({
  fontWeight: 400,
  fontFamily: "GoldmanBold",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",
  borderRadius: "5px",
  padding: "10px 20px",
  background: "#FFFFFF",
  color: "#000000",
  textAlign: "center",
  border: "2px solid #000000",
  textTransform: "initial",
  "&:hover": {
    background: "#000000",
  },
}));
