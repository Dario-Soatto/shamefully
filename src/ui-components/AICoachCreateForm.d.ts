/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AICoachCreateFormInputValues = {
    name?: string;
    avatar?: string;
};
export declare type AICoachCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AICoachCreateFormOverridesProps = {
    AICoachCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type AICoachCreateFormProps = React.PropsWithChildren<{
    overrides?: AICoachCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AICoachCreateFormInputValues) => AICoachCreateFormInputValues;
    onSuccess?: (fields: AICoachCreateFormInputValues) => void;
    onError?: (fields: AICoachCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AICoachCreateFormInputValues) => AICoachCreateFormInputValues;
    onValidate?: AICoachCreateFormValidationValues;
} & React.CSSProperties>;
export default function AICoachCreateForm(props: AICoachCreateFormProps): React.ReactElement;
