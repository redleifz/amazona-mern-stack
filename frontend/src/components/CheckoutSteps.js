import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CheckoutSteps = (props) => {
  return (
    <div>
      <Row className="checkout-steps">
        <Col className={props.step1 ? "active" : ""}> Sign-In</Col>
        <Col className={props.step2 ? "active" : ""}> Shipping</Col>
        <Col className={props.step3 ? "active" : ""}> Payment</Col>
        <Col className={props.step4 ? "active" : ""}> Place Order</Col>
      </Row>
    </div>
  );
};
export default CheckoutSteps;
