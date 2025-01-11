interface Props {
  width?: string;
}

//  a dummy component. does nothing

export const SearchBar = ({ width = "full" }: Props) => {
  return (
    <div className={`w-${width} h-10 bg-[#F4F5F5] rounded-full`}>
      <input
        type="text"
        placeholder="Search"
        className="w-full h-full px-4 text-sm bg-transparent rounded-full focus:outline-none"
      />
    </div>
  );
};
