/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ShamerCreateFormInputValues = {
    name?: string;
    phoneNumber?: string;
    email?: string;
};
export declare type ShamerCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShamerCreateFormOverridesProps = {
    ShamerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShamerCreateFormProps = React.PropsWithChildren<{
    overrides?: ShamerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShamerCreateFormInputValues) => ShamerCreateFormInputValues;
    onSuccess?: (fields: ShamerCreateFormInputValues) => void;
    onError?: (fields: ShamerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShamerCreateFormInputValues) => ShamerCreateFormInputValues;
    onValidate?: ShamerCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShamerCreateForm(props: ShamerCreateFormProps): React.ReactElement;
