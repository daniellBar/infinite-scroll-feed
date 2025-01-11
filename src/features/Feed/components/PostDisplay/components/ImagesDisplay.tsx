interface Props {
  imgs: string[];
}

export const ImagesDisplay = ({ imgs }: Props) => {
    if (!imgs?.length) return null;

    return (
      <div className="max-h-[517px] w-full flex justify-center">
        {imgs.length === 1 ? (
          <div className="max-h-[517px] flex items-center justify-center">
            <img
              className="max-h-full max-w-full object-contain"
              src={imgs[0]}
              alt="post-img"
            />
          </div>
        ) : (
          <div className="flex gap-2 w-full">
            <img
              className="max-h-full w-1/2 object-contain"
              src={imgs[0]}
              alt="post-img"
            />
            <img
              className="max-h-full w-1/2 object-contain"
              src={imgs[1]}
              alt="post-img"
            />
          </div>
        )}
      </div>
    );
  };
