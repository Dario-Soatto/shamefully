/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Shamer } from "../API.ts";
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
export declare type ShamerUpdateFormInputValues = {
    name?: string;
    phoneNumber?: string;
    email?: string;
};
export declare type ShamerUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShamerUpdateFormOverridesProps = {
    ShamerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShamerUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShamerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    shamer?: Shamer;
    onSubmit?: (fields: ShamerUpdateFormInputValues) => ShamerUpdateFormInputValues;
    onSuccess?: (fields: ShamerUpdateFormInputValues) => void;
    onError?: (fields: ShamerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShamerUpdateFormInputValues) => ShamerUpdateFormInputValues;
    onValidate?: ShamerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShamerUpdateForm(props: ShamerUpdateFormProps): React.ReactElement;
