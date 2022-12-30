import Label from '../atoms/Label';

type Props = {
    title: string
}
export default function FormArea({ title }: Props) {
    return <>
        <Label content="Title textArea"></Label>
    </>
}