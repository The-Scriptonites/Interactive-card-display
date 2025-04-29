import React, { useState } from "react";
import { FormPlacement } from "./component/FormPlacement";
import { CardPlacement } from "./component/CardPlacement";
import { ConfirmationPlacement } from "./component/ConfirmationPlacement";

function App() {
  const [formInput, setFormInput] = useState({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  });
  const [submit, setSubmit] = useState(false);
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-[30%_1fr] h-[100vh] ">
        <div className="h-full bg-cover bg-no-repeat relative md:bg-main-desktop bg-main-mobile z-20">
          <CardPlacement form={formInput} />
        </div>
        <div className="h-full flex items-center justify-center p-4 relative">
          {submit ? (
            <ConfirmationPlacement
              setSubmit={setSubmit}
              setFormInput={setFormInput}
            />
          ) : (
            <FormPlacement
              form={formInput}
              updateForm={setFormInput}
              setSubmit={setSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
