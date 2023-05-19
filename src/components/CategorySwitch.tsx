import CategoryButton from "./CategoryButton";

const CategorySwitch = () => {
  return (
    <div className="lg:flex justify-around border-b lg:pt-9">
      <div className="flex basis-1/3">
        <CategoryButton categoryName="全部" isSelected />
        <CategoryButton categoryName="追蹤" />
        <CategoryButton categoryName="主題" />
      </div>
      <div className="hidden lg:block">Sort</div>
    </div>
  );
};
export default CategorySwitch;
