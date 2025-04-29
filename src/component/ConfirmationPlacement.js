import { Button } from "./Button";

export function ConfirmationPlacement({ setSubmit, setFormInput }) {
  const handleContinue = () => {
    setSubmit(false);
    setFormInput({});
  };

  return (
    <div className="flex flex-col items-center  absolute gap-3 left-[45%] top-[30%] w-full max-w-[400px] text-center">
      <img
        src="images/icon-complete.svg"
        alt="complete-logo"
        width={"60px"}
        className="block"
      />
      <h2 className="text-xl tracking-widest uppercase text-purple-500 font-semibold">
        Thank you!
      </h2>
      <p className="text-slate-500 mb-3">We've added your card details </p>
      <Button onClick={handleContinue}>Continue</Button>
    </div>
  );
}
