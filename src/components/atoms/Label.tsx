import { ReactNode } from "react"

type Props = {
    children: ReactNode
}
export default function Label({children}: Props) {
    return <>
        <p>{children}</p>
    </>
}