/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CheckIn } from "../API.ts";
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
export declare type CheckInUpdateFormInputValues = {
    title?: string;
    type?: string;
    description?: string;
    deadline?: string;
    status?: string;
    icon?: string;
};
export declare type CheckInUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    deadline?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    icon?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CheckInUpdateFormOverridesProps = {
    CheckInUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    deadline?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    icon?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CheckInUpdateFormProps = React.PropsWithChildren<{
    overrides?: CheckInUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    checkIn?: CheckIn;
    onSubmit?: (fields: CheckInUpdateFormInputValues) => CheckInUpdateFormInputValues;
    onSuccess?: (fields: CheckInUpdateFormInputValues) => void;
    onError?: (fields: CheckInUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CheckInUpdateFormInputValues) => CheckInUpdateFormInputValues;
    onValidate?: CheckInUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CheckInUpdateForm(props: CheckInUpdateFormProps): React.ReactElement;
