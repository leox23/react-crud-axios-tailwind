import Label from '../atoms/Label';
import TextBox from '../atoms/TextBox';

type Props = {
    title: string,
    placeHolder: string
}
export default function FormField({title, placeHolder}:Props) {
    return <div className="py-1 px-4">
        <Label >{title}</Label>
        <TextBox placeHolder={placeHolder} name={title}></TextBox>
    </div>
}