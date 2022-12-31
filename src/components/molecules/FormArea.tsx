import Label from "../atoms/Label"
import TextArea  from "../atoms/TextArea"


type Props = {
    title: string
    placeHolder:string
}
export default function FormArea({ title, placeHolder }: Props) {
    return <div className="py-1 px-4">
        <Label >{title}</Label>
        <TextArea placeHolder={placeHolder}></TextArea>
    </div>
}