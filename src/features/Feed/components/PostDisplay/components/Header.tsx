import Typography from "../../../../../components/Typography/Typography";
import { parseDateToTimePassed } from "../../../../../utils/date-utils";
import { Description } from "./Description";

interface Props {
  avatar: string;
  name: string;
  company: string;
  time: string;
  description: string;
}

export const Header = ({ avatar, name, company, time, description }: Props) => {
  return (
    <div className="flex flex-col gap-4 pt-6 pb-4 px-6">
      <div className="flex gap-3 items-center">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={avatar}
          alt="avatar"
        />
        <div>
          <Typography
            className="!text-dark-25"
            type="subheading"
            weight="medium"
          >
            {name}
          </Typography>
          <div className="flex items-center ">
            <Typography className="!text-blue-600" weight="medium">
              {company}
            </Typography>
            <span className="before:content-['•'] mx-2 text-gray-400"></span>
            <Typography className="!text-gray-500">
              {parseDateToTimePassed(time)}
            </Typography>
          </div>
        </div>
      </div>

      <Description text={description} />
    </div>
  );
};
