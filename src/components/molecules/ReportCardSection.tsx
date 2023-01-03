import Paragraph from "../atoms/Paragraph";
import NotableLabel from "../atoms/Cost";

type Props = {
  text: string;
  cost: string;
};
export default function ReportCardSection({ text, cost }: Props) {
  return (
    <div>
      <Paragraph content={text}></Paragraph>
      <NotableLabel cost={cost}></NotableLabel>
    </div>
  );
}
