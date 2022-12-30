import ReportCardFooter from "../molecules/ReportCardFooter";
import { ReportCardHeader } from "../molecules/ReportCardHeader";
import ReportCardSection from "../molecules/ReportCardSection";
export default function ReportCard() {
  return (
    <>
      <ReportCardHeader titleCard="" description=""></ReportCardHeader>
      <ReportCardSection paragraph="" cost=""></ReportCardSection>
      <ReportCardFooter></ReportCardFooter>
    </>
  );
}
