/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getCheckIn } from "../graphql/queries";
import { updateCheckIn } from "../graphql/mutations";
const client = generateClient();
export default function CheckInUpdateForm(props) {
  const {
    id: idProp,
    checkIn: checkInModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    type: "",
    description: "",
    deadline: "",
    status: "",
    icon: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [type, setType] = React.useState(initialValues.type);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [deadline, setDeadline] = React.useState(initialValues.deadline);
  const [status, setStatus] = React.useState(initialValues.status);
  const [icon, setIcon] = React.useState(initialValues.icon);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = checkInRecord
      ? { ...initialValues, ...checkInRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setType(cleanValues.type);
    setDescription(cleanValues.description);
    setDeadline(cleanValues.deadline);
    setStatus(cleanValues.status);
    setIcon(cleanValues.icon);
    setErrors({});
  };
  const [checkInRecord, setCheckInRecord] = React.useState(checkInModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCheckIn.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCheckIn
        : checkInModelProp;
      setCheckInRecord(record);
    };
    queryData();
  }, [idProp, checkInModelProp]);
  React.useEffect(resetStateValues, [checkInRecord]);
  const validations = {
    title: [],
    type: [],
    description: [],
    deadline: [],
    status: [],
    icon: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title: title ?? null,
          type: type ?? null,
          description: description ?? null,
          deadline: deadline ?? null,
          status: status ?? null,
          icon: icon ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateCheckIn.replaceAll("__typename", ""),
            variables: {
              input: {
                id: checkInRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CheckInUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              type,
              description,
              deadline,
              status,
              icon,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type: value,
              description,
              deadline,
              status,
              icon,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Click"
          value="CLICK"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Photo"
          value="PHOTO"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="Text"
          value="TEXT"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
        <option
          children="Email"
          value="EMAIL"
          {...getOverrideProps(overrides, "typeoption3")}
        ></option>
        <option
          children="Phone call"
          value="PHONE_CALL"
          {...getOverrideProps(overrides, "typeoption4")}
        ></option>
        <option
          children="Social media post"
          value="SOCIAL_MEDIA_POST"
          {...getOverrideProps(overrides, "typeoption5")}
        ></option>
      </SelectField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type,
              description: value,
              deadline,
              status,
              icon,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Deadline"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={deadline && convertToLocal(new Date(deadline))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              title,
              type,
              description,
              deadline: value,
              status,
              icon,
            };
            const result = onChange(modelFields);
            value = result?.deadline ?? value;
          }
          if (errors.deadline?.hasError) {
            runValidationTasks("deadline", value);
          }
          setDeadline(value);
        }}
        onBlur={() => runValidationTasks("deadline", deadline)}
        errorMessage={errors.deadline?.errorMessage}
        hasError={errors.deadline?.hasError}
        {...getOverrideProps(overrides, "deadline")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type,
              description,
              deadline,
              status: value,
              icon,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Icon"
        isRequired={false}
        isReadOnly={false}
        value={icon}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              type,
              description,
              deadline,
              status,
              icon: value,
            };
            const result = onChange(modelFields);
            value = result?.icon ?? value;
          }
          if (errors.icon?.hasError) {
            runValidationTasks("icon", value);
          }
          setIcon(value);
        }}
        onBlur={() => runValidationTasks("icon", icon)}
        errorMessage={errors.icon?.errorMessage}
        hasError={errors.icon?.hasError}
        {...getOverrideProps(overrides, "icon")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || checkInModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || checkInModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
