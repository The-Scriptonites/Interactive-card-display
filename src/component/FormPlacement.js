import { useState } from "react";
import { Button } from "./Button";

export function FormPlacement({ form, updateForm, setSubmit }) {
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    setErrorMessage({
      ...errorMessage,
      [name]: "",
    });

    if (
      name === "month" ||
      name === "year" ||
      name === "cvv" ||
      name === "cardNumber"
    )
      value = value.replace(/[^\d]/g, "");

    if (name === "month") {
      if (value !== "") {
        const monthValue = parseInt(value);
        if (monthValue > 12) {
          value = "12";
        }
      }
    }

    if (name === "cardNumber") {
      let formattedValue = "";
      for (let i = 0; i < value.length && i < 16; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedValue += " ";
        }
        formattedValue += value[i];
      }
      value = formattedValue;
    }

    updateForm({
      ...form,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    let newErrors = {};
    let hasErrors = false;

    if (!form.name) {
      newErrors.name = "Can't be blank";
      hasErrors = true;
    }
    if (!form.cardNumber) {
      newErrors.cardNumber = "Can't be blank";
      hasErrors = true;
    }
    if (!form.month) {
      newErrors.month = "Can't be blank";
      hasErrors = true;
    }
    if (!form.year) {
      newErrors.year = "Can't be blank";
      hasErrors = true;
    }
    if (!form.cvv) {
      newErrors.cvv = "Can't be blank";
      hasErrors = true;
    }

    const cardNumberDigits = form.cardNumber.replace(/\s/g, "").length;
    if (cardNumberDigits !== 16) {
      newErrors.cardNumber = `Number must be 16 digits`;
      hasErrors = true;
    }
    if (form.cvv.length !== 3) {
      newErrors.cvv = "CVV must be 3 digits";
      hasErrors = true;
    }

    setErrorMessage(newErrors);
    if (!hasErrors) {
      setSubmit(true);
    }
  };

  return (
    <form
      className=" absolute sm:left-[45%] top-[30%] w-[80%] max-w-[400px]"
      onSubmit={submitForm}
    >
      <div className="space-y-2">
        <label className="text-[12px] sm:text-sm uppercase tracking-wider text-gray-700 font-medium">
          Cardholder Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          // required
          onChange={handleInputChange}
          placeholder="eg.. Jane Applessed"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-400"
        />
        {errorMessage.name && (
          <span className="text-red-500 text-[12px]">{errorMessage.name}</span>
        )}
      </div>

      <div className="space-y-2 mt-6">
        <label className="text-[12px] sm:text-sm uppercase tracking-wider text-gray-700 font-medium">
          Card Number
        </label>
        <input
          type="text"
          maxLength={19}
          // required
          onChange={handleInputChange}
          name="cardNumber"
          value={form.cardNumber}
          placeholder="eg. 1234 2345 1243 2324"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-violet-400 focus:ring-1"
        />
        {errorMessage.cardNumber && (
          <span className="text-red-500 text-[12px]">
            {errorMessage.cardNumber}
          </span>
        )}
      </div>

      <div className=" grid grid-cols-2 font-semibold mt-4 gap-4">
        <div className="space-y-2">
          <label className="text-[12px] sm:text-sm uppercase tracking-wider text-gray-700 ">
            Exp. date (MM/YY)
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <input
                type="text"
                maxLength={2}
                name="month"
                value={form.month}
                // required
                onChange={handleInputChange}
                placeholder="MM"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-violet-400 focus:ring-1"
              />
              {errorMessage.month && (
                <span className="text-red-500 text-[12px]">
                  {errorMessage.month}
                </span>
              )}
            </div>
            <div>
              <input
                type="text"
                name="year"
                value={form.year}
                // required
                onChange={handleInputChange}
                maxLength={2}
                placeholder="YY"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-violet-400 focus:ring-1"
              />
              {errorMessage.year && (
                <span className="text-red-500 text-[12px]">
                  {errorMessage.year}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[12px] sm:text-sm uppercase tracking-wider text-gray-700 ">
            Cvv
          </label>
          <input
            type="text"
            name="cvv"
            value={form.cvv}
            // required
            onChange={handleInputChange}
            maxLength={3}
            placeholder="e.g. 123"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-violet-400 focus:ring-1"
          />
          {errorMessage.cvv && (
            <span className="text-red-500 text-[12px]">{errorMessage.cvv}</span>
          )}
        </div>
      </div>
      <Button> Confirm </Button>
    </form>
  );
}
