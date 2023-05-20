import { useEffect, useState } from "react";
import CategoryButton from "./CategoryButton";

const CategorySwitch = () => {
  const [isDesktopFixed, setIsDesktopFixed] = useState(false);
  const [isMobileVisible, setIsMobileVisible] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  function controlNavbar() {
    if (window.scrollY > 22) {
      setIsDesktopFixed(true);
    } else {
      setIsDesktopFixed(false);
    }

    if (window.scrollY > prevScrollY) {
      setIsMobileVisible(false);
    } else {
      setIsMobileVisible(true);
    }

    setPrevScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [prevScrollY]);

  return (
    <div
      className={`bg-white z-20 border-b lg:flex lg:rounded-t justify-between duration-200 ${
        isMobileVisible ? "sticky top-0" : "sticky top-0 translate-y-[-100%]"
      } ${isDesktopFixed ? "lg:sticky lg:top-12 lg:translate-y-[0%] lg:duration-0" : ""}`}
    >
      <div className="flex basis-1/2 xl:basis-2/5 lg:pl-20">
        <CategoryButton categoryName="全部" isSelected />
        <CategoryButton categoryName="追蹤" />
        <CategoryButton categoryName="主題" />
      </div>
      <div className="hidden lg:flex items-center pr-20">
        <div>文章排序依</div>
        {/* 熱門 */}
      </div>
    </div>
  );
};
export default CategorySwitch;
