import CategoryButton from "./CategoryButton";

const CategorySwitch = () => {
  return (
    <div className="flex">
      <CategoryButton categoryName="全部" isSelected />
      <CategoryButton categoryName="追蹤" />
      <CategoryButton categoryName="主題" />
    </div>
  );
};
export default CategorySwitch;
