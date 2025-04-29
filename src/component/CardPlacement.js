export function CardPlacement({ form }) {
  return (
    <div className="">
      <div className="absolute top-[70%] left-[10%] md:top-[15%] md:left-[25%] z-20">
        <div className=" w-[210px] relative md:w-[447px] md:h-[256px]">
          <img
            alt="card front"
            className="block w-full h-full object-cover"
            src="/images/bg-card-front.png"
          />

          {/* Content Overlay for front card */}

          <div className="absolute inset-0 p-4 sm:p-8 text-white flex flex-col justify-between z-10">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 sm:w-12 sm:h-12 bg-white rounded-full" />
              <div className="w-3 h-3 sm:w-6 sm:h-6 border border-white rounded-full" />
            </div>
            <div className="space-y-2 sm:space-y-6">
              <p className="text-[12px] sm:text-2xl tracking-widest">
                {form.cardNumber || "0000 0000 0000 0000"}
              </p>
              <div className="flex justify-between">
                <p className="text-[10px] sm:text-2xl sm:tracking-wider">
                  {form.name || "JANE APPLESEED"}
                </p>
                <p className="text-[10px] sm:text-2xl tracking-wider">
                  {form.month || "00"}/{form.year || "00"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[40%] left-[28%] md:top-[55%] md:left-[50%]">
        <div className="w-[210px]  md:w-[447px] md:h-[245px] relative">
          <img
            alt="card back"
            className="block w-full object-cover "
            src="/images/bg-card-back.png"
          />
          <div className="absolute right-[20px] sm:right-12 top-[45%] text-white tracking-widest">
            <p className="text-[10px] sm:text-sm">{form.cvv || "000"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
