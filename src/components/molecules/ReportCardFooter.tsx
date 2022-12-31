import Button from "../atoms/Button";

export default function ReportCardFooter() {
    return <div className="flex justify-evenly align-center py-2">
        <Button label="Delete"></Button>
        <Button label="Edit"></Button>
    </div>
}