import Article from "./Article";
import CategorySwitch from "./CategorySwitch";
import FooterSelection from "./FooterSelection";
import seedData from "../assets/seedArticle.json";
import Sidebar from "./Sidebar/Sidebar";

const ThreadBody = () => {
  return (
    <main className="flex justify-center bg-[#00324e]">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="w-full lg:w-2/5 bg-white">
        <CategorySwitch />
        {seedData.map((article: any) => {
          return <Article key={article.id} data={article} />;
        })}
        <FooterSelection />
      </div>
    </main>
  );
};
export default ThreadBody;
