import { Report } from "../../model/Report";
import { ReportCardHeader } from "../molecules/ReportCardHeader";
import ReportCardSection from "../molecules/ReportCardSection";
import { useDispatch } from "react-redux";
import { deleteReport } from "../../features/reports/reportSlice";
import { useState } from "react";
import Modal from "./Modal";
type Props = {
  reportData: Report;
};
export default function ReportCard({ reportData }: Props) {
  const dispatch = useDispatch();

  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  const handleDelete = (id: any) => {
    dispatch(deleteReport(id));
  };
  return (
    <div className="rounded border-2 border-gray-700 p-4">
      <ReportCardHeader
        titleCard={reportData.title}
        description={reportData.description}
      ></ReportCardHeader>
      <ReportCardSection
        text={reportData.content}
        cost={reportData.price.toString()}
      ></ReportCardSection>
      <button
        onClick={() => handleDelete(reportData.id)}
        className="rounded bg-greenx min-w-[70px] p-2.5"
      >
        Delete
      </button>
      <button onClick={toggle} className="rounded bg-greenx min-w-[70px] p-2.5">
        Edit
      </button>
      {/*<ReportCardFooter></ReportCardFooter>*/}
      {isShowing ? (
        <div className="fixed flex justify-center items-center w-[100%] h-[100vh] modal modal-content z-20 top-0 right-0 ">
          <Modal toggle={toggle} reportId={reportData.id}></Modal>
        </div>
      ) : null}
    </div>
  );
}
