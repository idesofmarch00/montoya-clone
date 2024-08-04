import { forwardRef } from "react";
import Magnetic from "../magnetic";

const Header = forwardRef<HTMLDivElement, any>(function index(props, ref) {
  return (
    <div className="fixed flex w-full justify-end p-2 box-border cursor-pointer mix-blend-difference z-10">
      <style jsx>{`
        .burger::before,
        .burger::after {
          content: "";
          display: block;
          width: 30px;
          height: 2px;
          mix-blend-mode: difference;
          background-color: white;
        }
      `}</style>
      <Magnetic>
        <div className="relative flex flex-col gap-2 p-8 pointer-events-none">
          MENU <div
            ref={ref as React.Ref<HTMLDivElement>}
            className="absolute left-0 top-0 w-full h-full pointer-events-all hover:transform hover:scale-300"
          ></div>
        </div>
      </Magnetic>
    </div>
  );
});

export default Header;