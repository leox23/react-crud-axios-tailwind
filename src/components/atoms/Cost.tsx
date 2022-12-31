type Props = {
    cost: number
}
export default function Cost({ cost }: Props) {
    return <>
        <h3 className="w-100 text-center text-xl"><b>USD${cost}</b></h3>
    </>
}