const Forum = ({ data }: { data: any }) => {
  return (
    <div className="flex pl-4 gap-2 text-[#ffffffbf] items-center hover:bg-black py-2">
      <img className="h-7 w-7 rounded-full" src={data.logo?.url} />
      <div>{data.name}</div>
    </div>
  );
};
export default Forum;
