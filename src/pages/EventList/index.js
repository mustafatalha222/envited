import { LikeOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CONSTANTS, IMAGES } from "../../utils";
import styles from "./index.module.scss";

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  id: i + 1,
  title: `Birthday Bash ${i + 1}`,
  avatar: IMAGES.Event,
  description: `Hosted by: Talha  ${i + 1}`,
  content: `Street: B block street ${i + 1}`,
}));

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const EventList = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            onClick={() => navigate(`${CONSTANTS.ROUTES.EVENT}/${item.id}`)}
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
            ]}
            extra={<img width={272} alt="logo" src={IMAGES.Event} />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={item.title}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};

export default EventList;
