import Label from "../atoms/Label"
import TextArea from "../atoms/TextArea"


type Props = {
    title: string
}
export default function FormArea({ title }: Props) {
    return <div className="py-1 px-4">
        <Label content="Un label custom"></Label>
        <TextArea content="Title textArea"></TextArea>
    </div>
}