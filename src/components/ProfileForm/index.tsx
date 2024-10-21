import React from "react";
import ButtonComponent from "../Button";
import FormProps from "@/Interfaces/FromProps.Interface";
import Fields from "../Fields";
import Divider from "../Divider";

const FormProfile: React.FC<FormProps> = ({
    PersonalDatails,
    BusinessDetails,
    CardAccountDatails,
}: FormProps) => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <Fields
                title={PersonalDatails.title}
                fields={PersonalDatails.fields}
            />
            <ButtonComponent
                type="forgot"
                text="Forgot password?"
            ></ButtonComponent>
            {BusinessDetails && (
                <>
                    <Divider className="w-4/5"></Divider>
                    <Fields
                        title={BusinessDetails.title}
                        fields={BusinessDetails.fields}
                    />
                </>
            )}
            {CardAccountDatails && (
                <>
                    <Divider className="w-4/5 mt-8"></Divider>
                    <Fields
                        title={CardAccountDatails.title}
                        fields={CardAccountDatails.fields}
                    />
                </>
            )}
        </div>
    );
};

export default FormProfile;
