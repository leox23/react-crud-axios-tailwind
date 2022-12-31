type Props = {
    placeHolder: string
}
export default function TextBox({ placeHolder}:Props) {
    return <>
        <input className="w-[100%] rounded border border-gray-800 py-1.5 px-2" type="text" placeholder="TuVariableASuplantaraquielplaceholder"/>
    </>
}