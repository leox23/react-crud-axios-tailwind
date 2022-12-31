import TitleXL from '../atoms/TitleXL';
import FormField from '../molecules/FormField';
import FormArea from '../molecules/FormArea';
import Button from '../atoms/Button';

type Props = {
    visible: boolean
}

export default function Modal({visible}: Props) {
    return <div className="fixed z-20 flex flex-col rounded border-2 border-gray-700 bg-white w-[450px] h-[550px] left-[calc(50%-225px)] top-[calc(50%-275px)] py-2">
        <TitleXL title="Create Card"></TitleXL>
        <FormField title="Title"></FormField>
        <FormField title="Description"></FormField>
        <FormField title="Price"></FormField>
        <FormArea title="Content"></FormArea>
        <div className="flex justify-evenly items-center h-[100%] ">
            <Button label="Cancel"></Button>
            <Button label="Save"></Button>
        </div>
    </div>
}