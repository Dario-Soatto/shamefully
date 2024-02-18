/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AICoach } from "../API.ts";
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
export declare type AICoachUpdateFormInputValues = {
    name?: string;
    avatar?: string;
};
export declare type AICoachUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AICoachUpdateFormOverridesProps = {
    AICoachUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type AICoachUpdateFormProps = React.PropsWithChildren<{
    overrides?: AICoachUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aICoach?: AICoach;
    onSubmit?: (fields: AICoachUpdateFormInputValues) => AICoachUpdateFormInputValues;
    onSuccess?: (fields: AICoachUpdateFormInputValues) => void;
    onError?: (fields: AICoachUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AICoachUpdateFormInputValues) => AICoachUpdateFormInputValues;
    onValidate?: AICoachUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AICoachUpdateForm(props: AICoachUpdateFormProps): React.ReactElement;
