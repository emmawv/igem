import { FC } from "react";

interface PlaceHolderProps {
  height: string;
  width: string;
}

export const PlaceHolder: FC<PlaceHolderProps> = ({ height, width }) => (
  <div style={{ height: height, width: width, backgroundColor: "lightgrey" }} />
)