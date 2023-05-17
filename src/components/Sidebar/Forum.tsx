const Forum = ({ data }: { data: any }) => {
  return (
    <div className="flex gap-2">
      <img className="h-7 w-7 rounded-full" src={data.logo?.url} />
      <h3 className="text-white">{data.name}</h3>
    </div>
  );
};
export default Forum;
