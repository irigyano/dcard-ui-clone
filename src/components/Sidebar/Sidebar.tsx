import Forum from "./Forum";
import useFetch from "../../hooks/useFetch";
import DefaultForum from "./DefaultForum";
import AllForumIcon from "../SVG/AllForumIcon";

const Sidebar = () => {
  const { data } = useFetch("/src/assets/seedForum.json");

  return (
    <div className="w-max">
      <div className="hidden sticky top-12 lg:flex flex-col w-full pt-8">
        <DefaultForum icon={<AllForumIcon />} text={"所有看板"} />
        <DefaultForum icon={<AllForumIcon />} text={"即時熱門看板"} />
        <DefaultForum icon={<AllForumIcon />} text={"好物研究室"} />
        <DefaultForum icon={<AllForumIcon />} text={"創作者排行榜"} />
        <DefaultForum icon={<AllForumIcon />} text={"遊戲專區"} />
        <DefaultForum icon={<AllForumIcon />} text={"Hoya 投球球"} />

        <div className="h-[65vh] overflow-x-auto flex flex-col scrollbar">
          <div className="text-[#ffffff59] text-sm my-2 pl-4">即時熱門看板</div>
          {data
            .sort((a: any, b: any) => {
              return b.postCount.last30Days - a.postCount.last30Days;
            })
            .slice(0, 25)
            .map((forum: any) => {
              return <Forum key={forum.id} data={forum} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
