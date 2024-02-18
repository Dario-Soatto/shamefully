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
export declare type CheckInCreateFormInputValues = {
    title?: string;
    type?: string;
    description?: string;
    deadline?: string;
    status?: string;
    icon?: string;
};
export declare type CheckInCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    deadline?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    icon?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CheckInCreateFormOverridesProps = {
    CheckInCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    deadline?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    icon?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CheckInCreateFormProps = React.PropsWithChildren<{
    overrides?: CheckInCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CheckInCreateFormInputValues) => CheckInCreateFormInputValues;
    onSuccess?: (fields: CheckInCreateFormInputValues) => void;
    onError?: (fields: CheckInCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CheckInCreateFormInputValues) => CheckInCreateFormInputValues;
    onValidate?: CheckInCreateFormValidationValues;
} & React.CSSProperties>;
export default function CheckInCreateForm(props: CheckInCreateFormProps): React.ReactElement;
