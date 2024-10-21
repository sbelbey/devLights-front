import { FieldInterface } from "./Fields.interface";

export default interface FormProps {
    PersonalDatails?: {
        title: { text: string; className: string };
        subtitle?: { text: string; className: string };
        fields: FieldInterface[];
    };
    BusinessDetails?: {
        title: { text: string; className: string };
        subtitle?: { text: string; className: string };
        fields: FieldInterface[];
    };
    CardAccountDatails?: {
        title: { text: string; className: string };
        subtitle?: { text: string; className: string };
        fields: FieldInterface[];
    };
    formConstructor?: {
        title: { text: string; className: string };
        subtitle?: { text: string; className: string };
        fields: FieldInterface[];
    };
}
