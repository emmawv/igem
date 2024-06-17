import { FC } from "react";
import { Button } from "react-bootstrap";

export const Hero: FC = () => {
  return (
    <div className="page-hero">
      <div className="h-100 justify-content-center">
        <div className="hero-text">
          <h1 style={{ textAlign: "center" }}>Welcome to RePET</h1>
          <p>Where science meets sustainability</p>
          <Button><a href={"#about"}>Learn more</a></Button>
        </div>
      </div>
    </div>
  )
}