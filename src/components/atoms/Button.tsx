type Props = {
    label: string
}
export default function Button({label}: Props) {
    //recibira color
    return <>
        <button>{label}</button>
    </>
}