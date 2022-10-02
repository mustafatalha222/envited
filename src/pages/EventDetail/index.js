import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { Upload, Image, Collapse, DatePicker, Input } from "antd";
import { useUpload } from "../../hooks";
import { CONSTANTS, IMAGES } from "../../utils";
import { Button } from "../../components";

const { Panel } = Collapse;

export default function EventDetail() {
  const navigate = useNavigate();
  const { beforeUpload, imageUrl, uploadButton, handleChange } = useUpload();

  const Icon = ({ image }) => {
    return (
      <div className={styles.iconBg}>
        <img src={image} alt="icon" />
      </div>
    );
  };

  return (
    <>
      <div className={styles.container}>
        <section className={styles.detailWrapper}>
          <div className={styles.eventWrapper}>
            <span className={styles.name}>Event name</span>
            <br />
            <span className={styles.hosted}>Hosted by Talha</span>
          </div>

          <div>
            <Collapse>
              <Panel
                key="1"
                extra={
                  <div className={styles.collapse}>
                    <Icon image={IMAGES.Calendar} />
                    <div>
                      <span className={styles.themeColor}>
                        18 August 6:00PM
                      </span>
                      <br />
                      <span>to 19 August 1:00PM UTC +10</span>
                    </div>
                  </div>
                }
              >
                <DatePicker.RangePicker style={{ width: "100%" }} />
              </Panel>
            </Collapse>

            <Collapse>
              <Panel
                key="2"
                extra={
                  <div className={styles.collapse}>
                    <Icon image={IMAGES.Location} />
                    <div>
                      <span className={styles.themeColor}>Street address</span>
                      <br />
                      <span>B block address</span>
                    </div>
                  </div>
                }
              >
                <Input placeholder="Enter Address" />
              </Panel>
            </Collapse>

            <Collapse>
              <Panel
                key="3"
                extra={
                  <div className={styles.collapse}>
                    <Icon image={IMAGES.Calendar} />
                    <div>
                      <span className={styles.themeColor}>Link</span>
                      <br />
                      <span>netflix.com</span>
                    </div>
                  </div>
                }
              >
                <Input
                  addonBefore="http://"
                  addonAfter=".com"
                  defaultValue=""
                />
              </Panel>
            </Collapse>
          </div>
        </section>

        <section className={styles.imageWrapper}>
          {imageUrl ? (
            <Image.PreviewGroup>
              <Image className={styles.imageDisplay} src={imageUrl} />
            </Image.PreviewGroup>
          ) : (
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          )}
        </section>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          name="See all events"
          onClick={() => navigate(CONSTANTS.ROUTES.EVENTS)}
        />
      </div>
    </>
  );
}
