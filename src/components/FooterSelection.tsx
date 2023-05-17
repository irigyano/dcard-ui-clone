const FooterSelection = () => {
  return (
    <div className="h-12 sticky bottom-0 z-50 bg-white lg:hidden">
      <div className="pt-[1px] border-t flex w-full h-full">
        <div className="flex-1">
          <div className="h-7 w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              role="img"
              aria-hidden="true"
              viewBox="0 0 28 28"
            >
              <path
                d="m23.26 10-8.72-6.81a.87.87 0 0 0-1.08 0L4.74 10A2 2 0 0 0 4 11.58V25h6.36v-7.69a1.87 1.87 0 0 1 1.81-1.92h3.65a1.89 1.89 0 0 1 1.82 1.94V25H24V11.58a2 2 0 0 0-.74-1.58Z"
                transform="translate(0 -1)"
                // style="fill:&quot"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex-1">item</div>
        <div className="flex-1">item</div>
        <div className="flex-1">item</div>
        <div className="flex-1">item</div>
      </div>
    </div>
  );
};
export default FooterSelection;
