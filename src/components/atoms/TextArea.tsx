type Props = {
    content:string
}
export default function TextArea ({content}:Props) {
    return <>
        <textarea className="rounded border-2 border-gray-800 w-[100%] p-2 " name="content" id="" cols={30} rows={5} placeholder="Contenido del reporte"></textarea>
    </>
}