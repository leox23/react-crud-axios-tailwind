type Props = {
    placeHolder:string
}
export default function TextArea ({placeHolder}:Props) {
    return <>
        <textarea className="rounded border-2 border-gray-800 w-[100%] p-2 " name="content" id="" cols={30} rows={5} placeholder={placeHolder}></textarea>
    </>
}