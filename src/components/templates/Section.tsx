import { useSelector } from 'react-redux';
import { Report, StateReports } from '../../model/Report';
import ReportCard from '../organisms/ReportCard';
export default function Section() {
    const reports : Report[] = useSelector( (state : StateReports) => state.reports)
    console.log("🚀 ~ file: Section.tsx:6 ~ Section ~ reports", reports)
    
    return <div className="min-y-fit grid grid-cols-4 grid-flow-row gap-8  py-8 px-8 mt-[10vh]">
        {reports.map((report) => {
            return <>
            <ReportCard reportData={report}></ReportCard>
            </>
        })}
    </div>
}