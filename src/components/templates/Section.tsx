import { useState } from "react";
import { useSelector } from "react-redux";
import { Report, StateReports } from "../../model/Report";
import ReportCard from "../organisms/ReportCard";
import Modal from "../organisms/Modal";
export default function Section() {
  const reports: Report[] = useSelector((state: StateReports) => state.reports);

  const [isShowing, setIsShowing] = useState(false);
  function toggle() {
    setIsShowing(!isShowing);
  }

  return (
    <>
      <div className="min-y-fit ">
        {isShowing ? (
          <div className="fixed flex justify-center items-center w-[100%] h-[100vh] modal modal-content z-20  ">
            <Modal toggle={toggle}></Modal>
          </div>
        ) : null}
        <div className="flex filter drop-shadow-lg items-center border border-gray-600 justify-center w-[100%] h-[10vh] py-10">
          <p>Total Reports: {reports.length}</p>
          <button
            onClick={toggle}
            className="rounded bg-greenx min-w-[70px] p-2.5"
          >
            Create report
          </button>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-8  py-8 px-8 ">
          {reports.map((report) => {
            return (
              <>
                <ReportCard reportData={report}></ReportCard>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
