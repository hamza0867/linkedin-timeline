import { Typography } from "antd";
import { WorkExperience } from "./workexperience";

interface Props {
  workexperience: WorkExperience;
}

export const SingleWorkExperience = ({ workexperience }: Props) => {
  return (
    <>
      <Typography.Title level={3}>{workexperience.title}</Typography.Title>
      <div>
        <Typography.Text>
          {workexperience.startDate.toLocaleDateString("en-US")} -{" "}
          {workexperience.endDate.toLocaleDateString("en-US")}
        </Typography.Text>
      </div>
      <div>
        <Typography.Text type="secondary">
          {workexperience.description}
        </Typography.Text>
      </div>
    </>
  );
};
