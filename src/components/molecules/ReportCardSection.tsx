import Paragraph from '../atoms/Paragraph';
import NotableLabel from '../atoms/Cost';

type Props = {
    paragraph:string,
    cost:string
}
export default function ReportCardSection(paragraph: Props, cost: Props) {
    return <>
        <Paragraph content="Lorem ipsum dolor sit amet, consectetur. Laborum voluptas velit eius, cupiditate suscipit voluptas, vero iusto magnam est? Officiis corrupti excepturi possimus reprehenderit repellat tempora dolorem ipsum excepturi. "></Paragraph>
        <NotableLabel cost="100"></NotableLabel>
    </>
}