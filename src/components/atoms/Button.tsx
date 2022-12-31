type Props = {
    label: string
}
export default function Button({label}: Props) {
    return <>
        <button  className="rounded bg-greenx min-w-[70px] p-2.5">{label}</button>
    </>
}
