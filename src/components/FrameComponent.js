const FrameComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[90.4px] pr-0 pl-1 box-border max-w-full text-left text-smi-4 text-dimgray font-med">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq675:flex-wrap">
        <div className="h-[80.6px] w-[217px] flex flex-row items-start justify-start gap-[21.299999999999955px]">
          <img
            className="h-[80.6px] w-[80.6px] relative object-cover"
            loading="lazy"
            alt=""
            src="/group-1@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[10.599999999999994px]">
            <b className="relative inline-block min-w-[79px]">Published by</b>
            <img
              className="self-stretch h-[34.5px] relative max-w-full overflow-hidden shrink-0 object-contain"
              alt=""
              src="/component-40-1@2x.png"
            />
          </div>
        </div>
        <div className="w-[299px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-9xl">
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
              alt=""
              src="/frame-6.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
              <div className="relative font-semibold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-3xl">
                Create Flashcard
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
