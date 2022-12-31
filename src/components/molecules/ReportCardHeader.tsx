import Label from '../atoms/Label';
import TitleXL from '../atoms/TitleXL';

type Props = {
    titleCard?: string,
    description: string 
}

export function ReportCardHeader({titleCard = 'Default title', description}: Props){
    return <>
        <TitleXL title="Titulo de prueba"></TitleXL>
        <Label content="contenido de prueba"></Label>
    </>
}