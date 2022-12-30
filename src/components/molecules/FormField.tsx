import Label from '../atoms/Label';
import TextBox from '../atoms/TextBox';

type Props = {
    title: string
}
export default function FormField({title}:Props) {
    return <>
        <Label content="Un label custom"></Label>
        <TextBox placeHolder="base"></TextBox>
    </>
}