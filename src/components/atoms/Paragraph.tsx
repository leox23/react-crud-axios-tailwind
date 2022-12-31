type Props = {
    content: string
}
export default function Paragraph({content}: Props) {
    return <>
        <p className="py-1 leading-[1.5rem]">{content}</p>
    </>
}