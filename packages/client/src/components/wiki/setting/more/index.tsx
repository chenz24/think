import { Button, Banner, Typography } from "@douyinfe/semi-ui";
import { WorkspaceDeletor } from "components/wiki/delete";

interface IProps {
  wikiId: string;
}

const { Paragraph } = Typography;

export const More: React.FC<IProps> = ({ wikiId }) => {
  return (
    <div style={{ marginTop: 16 }}>
      <Banner
        fullMode={false}
        type="danger"
        closeIcon={null}
        description={
          <Paragraph>删除知识库及内部所有文档，不可恢复！</Paragraph>
        }
        style={{ marginBottom: 16 }}
      />
      <WorkspaceDeletor wikiId={wikiId}>
        <Button type="danger" theme="solid">
          删除知识库
        </Button>
      </WorkspaceDeletor>
    </div>
  );
};
