import ReportCardFooter from "../molecules/ReportCardFooter";
import { ReportCardHeader } from "../molecules/ReportCardHeader";
import ReportCardSection from "../molecules/ReportCardSection";
export default function ReportCard() {
  return (
    <div className="rounded border-2 border-gray-700 p-4">
      <ReportCardHeader titleCard="" description=""></ReportCardHeader>
      <ReportCardSection text="" cost=""></ReportCardSection>
      <ReportCardFooter></ReportCardFooter>
    </div>
  );
}
