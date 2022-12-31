type Props = {
    title: string
}

export default function TitleXL({title} : Props) {
    return <div className="flex items-center justify-center py-3">
        <h1 className="text-3xl font-semibold">{title}</h1>
    </div>
}