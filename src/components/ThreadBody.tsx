import useFetch from "../hooks/useFetch";
import Article from "./Article";
import CategorySwitch from "./CategorySwitch";
import MobileFooter from "./MobileFooter/MobileFooter";

const ThreadBody = () => {
  const { data } = useFetch("/src/assets/seedArticle.json");

  const filteredData = data.slice(0, 11);

  return (
    <main className="flex justify-center w-full lg:w-2/5">
      <div className="w-full lg:pt-5 lg:mx-3">
        <div className="bg-white lg:rounded-[4px]">
          <CategorySwitch />
          <div className="lg:mx-14">
            {filteredData.map((article: any) => {
              return <Article key={article.id} data={article} />;
            })}
          </div>
          <MobileFooter />
        </div>
      </div>
    </main>
  );
};
export default ThreadBody;
