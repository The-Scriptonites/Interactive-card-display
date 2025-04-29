export function CardPlacement({ form }) {
  return (
    <div>
      <div className="absolute top-[15%] left-[25%]">
        <div className="relative w-[447px] h-[256px]">
          <img
            alt="card front"
            className="block w-full h-full object-cover"
            src="/images/bg-card-front.png"
          />

          {/* Content Overlay for front card */}

          <div className="absolute inset-0 p-8 text-white flex flex-col justify-between z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full" />
              <div className="w-6 h-6 border border-white rounded-full" />
            </div>
            <div className="space-y-6">
              <p className="text-2xl tracking-widest">
                {form.cardNumber || "0000 0000 0000 0000"}
              </p>
              <div className="flex justify-between">
                <p className="tracking-wider">
                  {form.name || "JANE APPLESEED"}
                </p>
                <p className="tracking-wider">
                  {form.month || "00"}/{form.year || "00"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[55%] left-[50%]">
        <div className="w-[447px] h-[245px] relative">
          <img
            alt="card back"
            className="block w-full object-cover "
            src="/images/bg-card-back.png"
          />
          <div className="absolute right-12 top-[45%] text-white tracking-widest">
            <p>{form.cvv || "000"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
