export interface FieldInterface {
    iconPath?: string;
    label?: string;
    props: {
        type: string;
        name: string;
        className?: string;
        placeholder: string;
        require?: boolean;
        options?: string[];
        pattern?: string;
        minLength?: number;
    };
    errorText?: string;
}
