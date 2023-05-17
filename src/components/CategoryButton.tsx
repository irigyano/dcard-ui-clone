type CategoryButtonProps = {
  categoryName: string;
  isSelected?: boolean;
};

const CategoryButton = ({ categoryName, isSelected }: CategoryButtonProps) => {
  return (
    <>
      <div
        className={`flex-1 flex flex-col justify-center items-center text-sm h-11 border-b-[2px] box-content
         ${isSelected ? "border-[#3397cf]" : "text-black/[.35]"} `}
      >
        {categoryName}
      </div>
    </>
  );
};
export default CategoryButton;
