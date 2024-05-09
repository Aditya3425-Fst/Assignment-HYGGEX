import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const Desktop = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-center justify-start pt-[27px] px-5 pb-[307px] box-border gap-[64px] leading-[normal] tracking-[normal] mq450:gap-[16px_64px] mq675:gap-[32px_64px]">
      <header className="w-[1236px] flex flex-row items-start justify-end py-0 pr-px pl-0.5 box-border max-w-full text-left text-lg text-darkslategray-100 font-med">
        <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px]">
          <div className="w-[191px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border">
            <img
              className="self-stretch h-[39px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/component-40@2x.png"
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-[40px] max-w-full mq675:gap-[40px_20px] mq750:hidden">
            <nav className="m-0 w-[282px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
              <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-lg text-darkslategray-100 font-med">
                <div className="relative inline-block min-w-[51px]">Home</div>
                <div className="relative inline-block min-w-[83px]">
                  Flashcard
                </div>
                <div className="relative inline-block min-w-[68px]">
                  Contact
                </div>
              </nav>
            </nav>
            <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
              <div className="relative inline-block min-w-[35px]">FAQ</div>
            </div>
            <Button
              className="h-12 w-32"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "linear-gradient(180deg, #06286e, #164ec0)",
                borderRadius: "32px",
                "&:hover": {
                  background: "linear-gradient(180deg, #06286e, #164ec0)",
                },
                width: 128,
                height: 48,
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </header>
      <main className="w-[1236px] flex flex-col items-start justify-start gap-[64px] max-w-full text-center text-lg text-dimgray font-med mq450:gap-[16px_64px] mq675:gap-[32px_64px]">
        <div className="flex flex-row items-center justify-start [row-gap:20px] max-w-full mq675:flex-wrap">
          <div className="flex flex-row items-center justify-start">
            <img
              className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/frame-1.svg"
            />
            <div className="relative font-medium inline-block min-w-[85px]">
              Flashcard
            </div>
          </div>
          <div className="flex flex-row items-center justify-center [row-gap:20px] max-w-full mq450:flex-wrap">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/frame-1.svg"
            />
            <div className="relative font-medium inline-block min-w-[112px]">
              Mathematics
            </div>
            <div className="flex flex-row items-center justify-start text-darkslateblue">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-1.svg"
              />
              <div className="relative font-semibold">
                Relation and Function
              </div>
            </div>
          </div>
        </div>
        <FrameComponent1 />
        <FrameComponent />
        <section className="w-[852px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full text-left text-[48px] text-gray font-med">
          <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full">
            <b className="relative tracking-[0.01em] inline-block text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] min-w-[97px] mq450:text-[29px] mq750:text-[38px]">
              FAQ
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-base mq450:gap-[16px_32px]">
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[59px] font-med font-semibold text-base text-gray"
                placeholder="Can education flashcards be used for all age groups?"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="24px" height="24px" src="/frame-7.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#217eec" },
                  "& .MuiInputBase-root": {
                    height: "59px",
                    paddingRight: "24px",
                    borderRadius: "12px",
                  },
                  "& .MuiInputBase-input": { color: "#28262c" },
                }}
              />
              <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-start justify-between pt-[15px] pb-[7px] pr-[25px] pl-6 gap-[20px] border-[1px] border-solid border-dodgerblue">
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                  <div className="relative leading-[26px] font-semibold">
                    How do education flashcards work?
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-8.svg"
                />
              </div>
              <div className="self-stretch rounded-xl box-border overflow-hidden flex flex-row items-start justify-between pt-[15px] pb-[7px] pr-[25px] pl-6 max-w-full shrink-0 gap-[20px] border-[1px] border-solid border-dodgerblue">
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-[calc(100%_-_44px)]">
                  <div className="relative leading-[26px] font-semibold">
                    Can education flashcards be used for test preparation?
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-8.svg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop;
