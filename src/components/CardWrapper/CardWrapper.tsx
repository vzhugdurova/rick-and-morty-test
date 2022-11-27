import { FC } from "react";
import { Card } from "@mui/material";

interface ICardWrapper {
  children: JSX.Element;
}

const CardWrapper: FC<ICardWrapper> = ({ children }) => {
  return (
    <Card
      sx={{
        display: "flex",
        width: 190,
        height: 220,
        borderRadius: 0,
        position: "relative",
        backgroundColor: "#dadada",
        justifyContent: "center",
        alignItems: "flex-end",
        cursor: "pointer"
      }}
    >
      {children}
    </Card>
  );
};

export default CardWrapper;
