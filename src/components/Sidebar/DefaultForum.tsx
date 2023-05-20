const DefaultForum = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="text-[#e8e6e3bf] flex items-center gap-1 hover:bg-black py-2 px-4">
      {icon}
      <div className="text-[#ffffffbf]">{text}</div>
    </div>
  );
};
export default DefaultForum;
