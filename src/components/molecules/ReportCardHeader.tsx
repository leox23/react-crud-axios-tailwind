import TitleLG from '../atoms/TitleLG';
import Label from '../atoms/Label';

type Props = {
    titleCard?: string,
    description: string 
}

export function ReportCardHeader({titleCard = 'Default title', description}: Props){
    return <>
        <TitleLG title="Titulo de prueba"></TitleLG>
        <Label content="contenido de prueba"></Label>
    </>
}