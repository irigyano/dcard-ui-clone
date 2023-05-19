import { ReactNode } from "react";

const MobileFooterItem = ({
  children,
  isSelected,
  isWrongSize,
}: {
  children: ReactNode;
  isSelected?: boolean;
  isWrongSize?: boolean;
}) => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        role="img"
        aria-hidden="true"
        className="h-7 w-7"
        viewBox={isWrongSize ? "0 0 24 24" : undefined}
        fill={isSelected ? "#3397cf" : "#00000033"}
      >
        {children}
      </svg>
    </div>
  );
};
export default MobileFooterItem;
