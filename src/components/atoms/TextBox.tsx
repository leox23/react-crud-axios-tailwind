import { useState } from 'react';


type Props = {
    placeHolder: string,
    name: string
}
export default function TextBox({ placeHolder, name}:Props) {
    const [ input, setInput ] = useState({
        [name]: "",
    })
    const handleChange = (e: { target: { name: string; value: string; }; } ) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    return <>
        <input className="w-[100%] rounded border border-gray-800 py-1.5 px-2" type="text" placeholder={placeHolder} name={name} onChange={handleChange}/>
    </>
}