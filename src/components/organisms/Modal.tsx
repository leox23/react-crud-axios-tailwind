import TitleXL from "../atoms/TitleXL";
import { useEffect, useState } from "react";
import { Report } from "../../model/Report";
import { useDispatch, useSelector } from "react-redux";
import { addReport, editReport } from "../../features/reports/reportSlice";
import { v4 as uuid } from "uuid";

type Props = {
  toggle: () => void;
  reportId?: string;
  isEditing?: boolean;
};

export default function Modal({
  toggle,
  reportId,
  isEditing = reportId !== undefined ? true : false,
}: Props) {
  const [report, setReport] = useState<Report | any>({
    id: reportId ? reportId : uuid(),
    title: "",
    description: "",
    price: "",
    content: "",
  });
  const reports: Report[] = useSelector((state: any) => state.reports);

  useEffect(() => {
    if (reportId) {
      setReport(reports.find((report) => report.id === reportId));
    }
  }, [setReport, reportId, reports]);

  const dispatch = useDispatch();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setReport({
      ...report,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(editReport(report));
    } else {
      dispatch(addReport(report));
    }
    toggle();
  };

  return (
    <div className="flex flex-col rounded border-2 border-gray-700 bg-white w-[450px] h-[550px] left-[calc(50%-225px)] top-[calc(50%-275px)] py-2">
      <form onSubmit={handleSubmit}>
        <TitleXL title="Create Card"></TitleXL>

        <div className="py-1 px-4">
          <p>Title</p>
          <input
            className="w-[100%] rounded border border-gray-800 py-1.5 px-2"
            type="text"
            placeholder="Title of report"
            name="title"
            onChange={handleChange}
            value={report.title || ""}
          />
        </div>

        <div className="py-1 px-4">
          <p>Description</p>
          <input
            className="w-[100%] rounded border border-gray-800 py-1.5 px-2"
            type="text"
            placeholder="Description of report"
            name="description"
            onChange={handleChange}
            value={report.description || ""}
          />
        </div>

        <div className="py-1 px-4">
          <p>Price</p>
          <input
            className="w-[100%] rounded border border-gray-800 py-1.5 px-2"
            type="text"
            id="priceNode"
            placeholder="Price of report"
            name="price"
            onChange={handleChange}
            value={report.price.toString()}
          />
        </div>

        <div className="py-1 px-4">
          <p>Content</p>
          <textarea
            name="content"
            onChange={handleChange}
            className="rounded border-2 border-gray-800 w-[100%] p-2 "
            cols={30}
            rows={5}
            value={report.content || ""}
          ></textarea>
        </div>

        <div className="flex justify-evenly items-center">
          <button onClick={(e: any) => handleSubmit(e)}>Save</button>
          <button onClick={toggle}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
