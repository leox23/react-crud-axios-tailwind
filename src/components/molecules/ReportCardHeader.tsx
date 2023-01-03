import Label from "../atoms/Label";
import TitleXL from "../atoms/TitleXL";

type Props = {
  titleCard: string;
  description: string;
};

export function ReportCardHeader({ titleCard, description }: Props) {
  return (
    <>
      <TitleXL title={titleCard}></TitleXL>
      <Label>{description}</Label>
    </>
  );
}
