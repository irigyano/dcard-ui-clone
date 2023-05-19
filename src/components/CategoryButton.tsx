type CategoryButtonProps = {
  categoryName: string;
  isSelected?: boolean;
};

const CategoryButton = ({ categoryName, isSelected }: CategoryButtonProps) => {
  return (
    <>
      <div
        className={`flex-1 text-center text-sm leading-[44px] after:border-b-[2px] after:w-full after:absolute after:left-0 after:bottom-[-1px] relative
         ${isSelected ? "after:border-[#3397cf]" : "text-black/[.35]"} `}
      >
        {categoryName}
      </div>
    </>
  );
};
export default CategoryButton;
