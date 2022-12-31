import Label from '../atoms/Label';
import TextBox from '../atoms/TextBox';

type Props = {
    title: string
}
export default function FormField({title}:Props) {
    return <div className="py-1 px-4">
        <Label content="Un label custom"></Label>
        <TextBox placeHolder="base"></TextBox>
    </div>
}