const Forum = ({ data }: { data: any }) => {
  return (
    <div className="flex gap-2 text-[#ffffffbf] items-center">
      <img className="h-7 w-7 rounded-full" src={data.logo?.url} />
      <div>{data.name}</div>
    </div>
  );
};
export default Forum;
