import TitleXL from '../atoms/TitleXL';
import FormField from '../molecules/FormField';
import FormArea from '../molecules/FormArea';
import Button from '../atoms/Button';
export default function Modal() {
    return <>
        <TitleXL title="Create Card"></TitleXL>
        <FormField title="Title"></FormField>
        <FormField title="Description"></FormField>
        <FormField title="Price"></FormField>
        <FormArea title="Content"></FormArea>
        <div>
            <Button label="Cancel"></Button>
            <Button label="Save"></Button>
        </div>
    </>
}