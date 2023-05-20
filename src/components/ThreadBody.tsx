import useFetch from "../hooks/useFetch";
import Article from "./Article";
import CategorySwitch from "./CategorySwitch";
import MobileFooter from "./MobileFooter/MobileFooter";

const ThreadBody = () => {
  const { data } = useFetch("/src/assets/seedArticle.json");

  const filteredData = data.slice(0, 11);

  return (
    <main className="bg-white lg:rounded-[4px] w-full lg:w-1/2 lg:mt-5 lg:mx-3">
      <CategorySwitch />
      <div className="lg:mx-14">
        {filteredData.map((article: any) => {
          return <Article key={article.id} data={article} />;
        })}
      </div>
      <MobileFooter />
    </main>
  );
};
export default ThreadBody;
