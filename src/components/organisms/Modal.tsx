import TitleXL from "../atoms/TitleXL";
import Button from "../atoms/Button";
import { useState } from "react";
import { Report } from "../../model/Report";
import { useDispatch } from "react-redux";
import { addReport } from "../../features/reports/reportSlice";

type Props = {
  visible: boolean;
};

export default function Modal() {
  const [report, setReport] = useState<Report>({
    title: "",
    description: "",
    price: 0,
    content: "",
  });

  const dispatch = useDispatch()

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setReport({
      ...report,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(addReport(report))
  };

  return (
    <div className="z-20 flex flex-col rounded border-2 border-gray-700 bg-white w-[450px] h-[550px] left-[calc(50%-225px)] top-[calc(50%-275px)] py-2">
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
          />
        </div>

        <div className="py-1 px-4">
          <p>Price</p>
          <input
            className="w-[100%] rounded border border-gray-800 py-1.5 px-2"
            type="text"
            placeholder="Price of report"
            name="price"
            onChange={handleChange}
          />
        </div>

        <div className="py-1 px-4">
          <p>Content</p>
          <textarea
            name="content"
            onChange={handleChange}
            className="rounded border-2 border-gray-800 w-[100%] p-2 "
            id=""
            cols={30}
            rows={5}
          ></textarea>
        </div>

        <div className="flex justify-evenly items-center">
          <button>Save</button>
          <button>Cancel</button>

          <Button label="Cancel"></Button>
          <Button label="Save"></Button>
        </div>
      </form>
    </div>
  );
}
