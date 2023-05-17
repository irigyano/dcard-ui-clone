import Forum from "./Forum";
import seedForum from "../../assets/seedForum.json";

// const side = seedForum.filter(()=>{})

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-1">
      {seedForum.slice(0, 21).map((forum: any) => {
        return <Forum data={forum} />;
      })}
    </div>
  );
};
export default Sidebar;
