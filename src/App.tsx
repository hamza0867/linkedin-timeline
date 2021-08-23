import React from "react";
import { Col, Row, Timeline, Typography } from "antd";
import { SingleWorkExperience } from "./SingleWorkExperience";
import { groupedWorkExperiences } from "./workexperience";
import "antd/dist/antd.css";

function App() {
  return (
    <div style={{ margin: "24px" }}>
      {groupedWorkExperiences.map((groupedXp, index) => (
        <React.Fragment key={index}>
          <Row gutter={24} align="middle">
            <Col>
              <Typography.Title level={1}>{groupedXp.company}</Typography.Title>
            </Col>
            <Col>
              <Typography.Text type="secondary">
                {groupedXp.startDate.toLocaleDateString("en-US")} -{" "}
                {groupedXp.endDate.toLocaleDateString("en-US")}
              </Typography.Text>
            </Col>
          </Row>
          <Timeline>
            {groupedXp.experiences.map((xp, index) => (
              <Timeline.Item>
                <SingleWorkExperience key={index} workexperience={xp} />
              </Timeline.Item>
            ))}
          </Timeline>
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
