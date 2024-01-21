/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import validator from "validator";

// const [errorMessage, setErrorMessage] = useState("lol");

// const validatePass = () => {
//   let valInput = document.getElementById("inPassword").value;

//   if (
//     validator.isStrongPassword(valInput, {
//       minLength: 8,
//       minLowercase: 1,
//       minUppercase: 1,
//       minNumbers: 1,
//       minSymbols: 1,
//     })
//   ) {
//     setErrorMessage("Contraseña fuerte");
//   } else {
//     setErrorMessage("La contraseña es débil");
//   }
// };

const spanVer = () => {
  let data = errorMessage;
  switch (errorMessage) {
    case "Contraseña fuerte":
      <span className="text-success font-weight-700">Fuerte</span>;
      break;

    case "La contraseña es débil":
      <span className="text-danger font-weight-700">Débil</span>;
      break;

    default:
      <span className="text-info font-weight-700">S/C</span>;
      break;
  }
};

const Register = () => {
  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Registrate</small>
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Name" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"

                  />
                  {/* {
                    validatePass
                  } */}
                </InputGroup>
              </FormGroup>
              <div className="text-muted font-italic">
                <small>
                  {/* {
                    spanVer
                  } */}
                </small>
              </div>

              <div className="text-center">
                <Button className="mt-4" color="success" type="button">
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
