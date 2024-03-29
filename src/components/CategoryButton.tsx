type CategoryButtonProps = {
  categoryName: string;
  isSelected?: boolean;
};

const CategoryButton = ({ categoryName, isSelected }: CategoryButtonProps) => {
  return (
    <>
      <div
        className={`flex-1 lg:flex justify-center items-center text-center text-sm lg:text-lg lg:h-20 h-11 leading-[44px] after:border-b-[2px] after:w-full after:absolute after:left-0 after:bottom-[-1px] relative
         ${isSelected ? "after:border-[#3397cf]" : "text-black/[.35]"} `}
      >
        {categoryName}
      </div>
    </>
  );
};
export default CategoryButton;
