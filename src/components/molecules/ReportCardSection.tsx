import Paragraph from '../atoms/Paragraph';
import NotableLabel from '../atoms/Cost';

type Props = {
    text:string,
    cost:string
}
export default function ReportCardSection({text, cost}: Props) {
    return <div>
        <Paragraph content="Lorem ipsum dolor sit amet, consectetur. Laborum voluptas velit eius, cupiditate suscipit voluptas, vero iusto magnam est? Officiis."></Paragraph>
        <NotableLabel cost="100"></NotableLabel>
    </div>
}