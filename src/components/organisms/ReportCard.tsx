import { Report } from "../../model/Report";
import ReportCardFooter from "../molecules/ReportCardFooter";
import { ReportCardHeader } from "../molecules/ReportCardHeader";
import ReportCardSection from "../molecules/ReportCardSection";
type Props = {
  reportData: Report
}
export default function ReportCard({reportData} : Props) {
  return (
    <div className="rounded border-2 border-gray-700 p-4">
      <ReportCardHeader titleCard={reportData.title} description={reportData.description}></ReportCardHeader>
      <ReportCardSection text={reportData.content} cost={reportData.price}></ReportCardSection>
      <ReportCardFooter></ReportCardFooter>
    </div>
  );
}
