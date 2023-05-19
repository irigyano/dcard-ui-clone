import Forum from "./Forum";
import useFetch from "../../hooks/useFetch";
import DefaultForum from "./DefaultForum";

const Sidebar = () => {
  const { data } = useFetch("/src/assets/seedForum.json");

  return (
    <div className="hidden lg:block w-[12%] pt-5">
      <div className="flex flex-col gap-3">
        <DefaultForum />
        <DefaultForum />
        <DefaultForum />
        <DefaultForum />
        <DefaultForum />
        <div className="truncate flex flex-col gap-3">
          <div className="text-[#ffffff59] text-sm my-2">Dcard 精選看板</div>
          {data
            .sort((a: any, b: any) => {
              return b.postCount.last30Days - a.postCount.last30Days;
            })
            // .slice(0, 25)
            .map((forum: any) => {
              return <Forum key={forum.id} data={forum} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
