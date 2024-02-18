/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phoneNumber?: string | null,
  id?: string | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phoneNumber?: string | null,
  goals?: ModelGoalConnection | null,
  checkIns?: ModelCheckInConnection | null,
  associatedShames?: ModelShamerConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelGoalConnection = {
  __typename: "ModelGoalConnection",
  items:  Array<Goal | null >,
  nextToken?: string | null,
};

export type Goal = {
  __typename: "Goal",
  name?: string | null,
  title?: string | null,
  description?: string | null,
  deadline?: string | null,
  creator?: User | null,
  checkIns?: ModelCheckInConnection | null,
  shamers?: ModelShamerConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  userGoalsId?: string | null,
  shamerShamingGoalId?: string | null,
  goalCreatorId?: string | null,
};

export type ModelCheckInConnection = {
  __typename: "ModelCheckInConnection",
  items:  Array<CheckIn | null >,
  nextToken?: string | null,
};

export type CheckIn = {
  __typename: "CheckIn",
  id: string,
  title?: string | null,
  type?: CheckInType | null,
  description?: string | null,
  creator?: User | null,
  deadline?: string | null,
  parentGoal?: Goal | null,
  createdAt: string,
  updatedAt: string,
  userCheckInsId?: string | null,
  goalCheckInsId?: string | null,
  shamerShamingCheckInsId?: string | null,
  checkInCreatorId?: string | null,
};

export enum CheckInType {
  CLICK = "CLICK",
  PHOTO = "PHOTO",
  TEXT = "TEXT",
  EMAIL = "EMAIL",
  PHONE_CALL = "PHONE_CALL",
  SOCIAL_MEDIA_POST = "SOCIAL_MEDIA_POST",
}


export type ModelShamerConnection = {
  __typename: "ModelShamerConnection",
  items:  Array<Shamer | null >,
  nextToken?: string | null,
};

export type Shamer = {
  __typename: "Shamer",
  id: string,
  name?: string | null,
  phoneNumber?: string | null,
  email?: string | null,
  shamingGoal?: ModelGoalConnection | null,
  shamingCheckIns?: ModelCheckInConnection | null,
  account?: User | null,
  createdAt: string,
  updatedAt: string,
  userAssociatedShamesId?: string | null,
  goalShamersId?: string | null,
};

export type UpdateUserInput = {
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phoneNumber?: string | null,
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateGoalInput = {
  name?: string | null,
  title?: string | null,
  description?: string | null,
  deadline?: string | null,
  id?: string | null,
  userGoalsId?: string | null,
  shamerShamingGoalId?: string | null,
  goalCreatorId?: string | null,
};

export type ModelGoalConditionInput = {
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  deadline?: ModelStringInput | null,
  and?: Array< ModelGoalConditionInput | null > | null,
  or?: Array< ModelGoalConditionInput | null > | null,
  not?: ModelGoalConditionInput | null,
  userGoalsId?: ModelIDInput | null,
  shamerShamingGoalId?: ModelIDInput | null,
  goalCreatorId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateGoalInput = {
  name?: string | null,
  title?: string | null,
  description?: string | null,
  deadline?: string | null,
  id: string,
  userGoalsId?: string | null,
  shamerShamingGoalId?: string | null,
  goalCreatorId?: string | null,
};

export type DeleteGoalInput = {
  id: string,
};

export type CreateCheckInInput = {
  id?: string | null,
  title?: string | null,
  type?: CheckInType | null,
  description?: string | null,
  deadline?: string | null,
  userCheckInsId?: string | null,
  goalCheckInsId?: string | null,
  shamerShamingCheckInsId?: string | null,
  checkInCreatorId?: string | null,
};

export type ModelCheckInConditionInput = {
  title?: ModelStringInput | null,
  type?: ModelCheckInTypeInput | null,
  description?: ModelStringInput | null,
  deadline?: ModelStringInput | null,
  and?: Array< ModelCheckInConditionInput | null > | null,
  or?: Array< ModelCheckInConditionInput | null > | null,
  not?: ModelCheckInConditionInput | null,
  userCheckInsId?: ModelIDInput | null,
  goalCheckInsId?: ModelIDInput | null,
  shamerShamingCheckInsId?: ModelIDInput | null,
  checkInCreatorId?: ModelIDInput | null,
};

export type ModelCheckInTypeInput = {
  eq?: CheckInType | null,
  ne?: CheckInType | null,
};

export type UpdateCheckInInput = {
  id: string,
  title?: string | null,
  type?: CheckInType | null,
  description?: string | null,
  deadline?: string | null,
  userCheckInsId?: string | null,
  goalCheckInsId?: string | null,
  shamerShamingCheckInsId?: string | null,
  checkInCreatorId?: string | null,
};

export type DeleteCheckInInput = {
  id: string,
};

export type CreateShamerInput = {
  id?: string | null,
  name?: string | null,
  phoneNumber?: string | null,
  email?: string | null,
  userAssociatedShamesId?: string | null,
  goalShamersId?: string | null,
};

export type ModelShamerConditionInput = {
  name?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelShamerConditionInput | null > | null,
  or?: Array< ModelShamerConditionInput | null > | null,
  not?: ModelShamerConditionInput | null,
  userAssociatedShamesId?: ModelIDInput | null,
  goalShamersId?: ModelIDInput | null,
};

export type UpdateShamerInput = {
  id: string,
  name?: string | null,
  phoneNumber?: string | null,
  email?: string | null,
  userAssociatedShamesId?: string | null,
  goalShamersId?: string | null,
};

export type DeleteShamerInput = {
  id: string,
};

export type CreateAICoachInput = {
  id?: string | null,
  name?: string | null,
  avatar?: AICoachAvatar | null,
};

export enum AICoachAvatar {
  ARNOLD = "ARNOLD",
  DOGGINS = "DOGGINS",
}


export type ModelAICoachConditionInput = {
  name?: ModelStringInput | null,
  avatar?: ModelAICoachAvatarInput | null,
  and?: Array< ModelAICoachConditionInput | null > | null,
  or?: Array< ModelAICoachConditionInput | null > | null,
  not?: ModelAICoachConditionInput | null,
};

export type ModelAICoachAvatarInput = {
  eq?: AICoachAvatar | null,
  ne?: AICoachAvatar | null,
};

export type AICoach = {
  __typename: "AICoach",
  id: string,
  name?: string | null,
  avatar?: AICoachAvatar | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAICoachInput = {
  id: string,
  name?: string | null,
  avatar?: AICoachAvatar | null,
};

export type DeleteAICoachInput = {
  id: string,
};

export type ModelUserFilterInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelGoalFilterInput = {
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  deadline?: ModelStringInput | null,
  and?: Array< ModelGoalFilterInput | null > | null,
  or?: Array< ModelGoalFilterInput | null > | null,
  not?: ModelGoalFilterInput | null,
  userGoalsId?: ModelIDInput | null,
  shamerShamingGoalId?: ModelIDInput | null,
  goalCreatorId?: ModelIDInput | null,
};

export type ModelCheckInFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  type?: ModelCheckInTypeInput | null,
  description?: ModelStringInput | null,
  deadline?: ModelStringInput | null,
  and?: Array< ModelCheckInFilterInput | null > | null,
  or?: Array< ModelCheckInFilterInput | null > | null,
  not?: ModelCheckInFilterInput | null,
  userCheckInsId?: ModelIDInput | null,
  goalCheckInsId?: ModelIDInput | null,
  shamerShamingCheckInsId?: ModelIDInput | null,
  checkInCreatorId?: ModelIDInput | null,
};

export type ModelShamerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelShamerFilterInput | null > | null,
  or?: Array< ModelShamerFilterInput | null > | null,
  not?: ModelShamerFilterInput | null,
  userAssociatedShamesId?: ModelIDInput | null,
  goalShamersId?: ModelIDInput | null,
};

export type ModelAICoachFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  avatar?: ModelAICoachAvatarInput | null,
  and?: Array< ModelAICoachFilterInput | null > | null,
  or?: Array< ModelAICoachFilterInput | null > | null,
  not?: ModelAICoachFilterInput | null,
};

export type ModelAICoachConnection = {
  __typename: "ModelAICoachConnection",
  items:  Array<AICoach | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionGoalFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  deadline?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGoalFilterInput | null > | null,
  or?: Array< ModelSubscriptionGoalFilterInput | null > | null,
};

export type ModelSubscriptionCheckInFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  deadline?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCheckInFilterInput | null > | null,
  or?: Array< ModelSubscriptionCheckInFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionShamerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionShamerFilterInput | null > | null,
  or?: Array< ModelSubscriptionShamerFilterInput | null > | null,
};

export type ModelSubscriptionAICoachFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  avatar?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAICoachFilterInput | null > | null,
  or?: Array< ModelSubscriptionAICoachFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phoneNumber?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        shamerShamingGoalId?: string | null,
        goalCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    associatedShames?:  {
      __typename: "ModelShamerConnection",
      items:  Array< {
        __typename: "Shamer",
        id: string,
        name?: string | null,
        phoneNumber?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        userAssociatedShamesId?: string | null,
        goalShamersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phoneNumber?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        shamerShamingGoalId?: string | null,
        goalCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    associatedShames?:  {
      __typename: "ModelShamerConnection",
      items:  Array< {
        __typename: "Shamer",
        id: string,
        name?: string | null,
        phoneNumber?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        userAssociatedShamesId?: string | null,
        goalShamersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phoneNumber?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        shamerShamingGoalId?: string | null,
        goalCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    associatedShames?:  {
      __typename: "ModelShamerConnection",
      items:  Array< {
        __typename: "Shamer",
        id: string,
        name?: string | null,
        phoneNumber?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        userAssociatedShamesId?: string | null,
        goalShamersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGoalMutationVariables = {
  input: CreateGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type CreateGoalMutation = {
  createGoal?:  {
    __typename: "Goal",
    name?: string | null,
    title?: string | null,
    description?: string | null,
    deadline?: string | null,
    creator?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    shamers?:  {
      __typename: "ModelShamerConnection",
      items:  Array< {
        __typename: "Shamer",
        id: string,
        name?: string | null,
        phoneNumber?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        userAssociatedShamesId?: string | null,
        goalShamersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
    shamerShamingGoalId?: string | null,
    goalCreatorId?: string | null,
  } | null,
};

export type UpdateGoalMutationVariables = {
  input: UpdateGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type UpdateGoalMutation = {
  updateGoal?:  {
    __typename: "Goal",
    name?: string | null,
    title?: string | null,
    description?: string | null,
    deadline?: string | null,
    creator?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    shamers?:  {
      __typename: "ModelShamerConnection",
      items:  Array< {
        __typename: "Shamer",
        id: string,
        name?: string | null,
        phoneNumber?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        userAssociatedShamesId?: string | null,
        goalShamersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
    shamerShamingGoalId?: string | null,
    goalCreatorId?: string | null,
  } | null,
};

export type DeleteGoalMutationVariables = {
  input: DeleteGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type DeleteGoalMutation = {
  deleteGoal?:  {
    __typename: "Goal",
    name?: string | null,
    title?: string | null,
    description?: string | null,
    deadline?: string | null,
    creator?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    shamers?:  {
      __typename: "ModelShamerConnection",
      items:  Array< {
        __typename: "Shamer",
        id: string,
        name?: string | null,
        phoneNumber?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        userAssociatedShamesId?: string | null,
        goalShamersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
    shamerShamingGoalId?: string | null,
    goalCreatorId?: string | null,
  } | null,
};

export type CreateCheckInMutationVariables = {
  input: CreateCheckInInput,
  condition?: ModelCheckInConditionInput | null,
};

export type CreateCheckInMutation = {
  createCheckIn?:  {
    __typename: "CheckIn",
    id: string,
    title?: string | null,
    type?: CheckInType | null,
    description?: string | null,
    creator?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deadline?: string | null,
    parentGoal?:  {
      __typename: "Goal",
      name?: string | null,
      title?: string | null,
      description?: string | null,
      deadline?: string | null,
      creator?:  {
        __typename: "User",
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        phoneNumber?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      shamers?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
      shamerShamingGoalId?: string | null,
      goalCreatorId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCheckInsId?: string | null,
    goalCheckInsId?: string | null,
    shamerShamingCheckInsId?: string | null,
    checkInCreatorId?: string | null,
  } | null,
};

export type UpdateCheckInMutationVariables = {
  input: UpdateCheckInInput,
  condition?: ModelCheckInConditionInput | null,
};

export type UpdateCheckInMutation = {
  updateCheckIn?:  {
    __typename: "CheckIn",
    id: string,
    title?: string | null,
    type?: CheckInType | null,
    description?: string | null,
    creator?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deadline?: string | null,
    parentGoal?:  {
      __typename: "Goal",
      name?: string | null,
      title?: string | null,
      description?: string | null,
      deadline?: string | null,
      creator?:  {
        __typename: "User",
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        phoneNumber?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      shamers?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
      shamerShamingGoalId?: string | null,
      goalCreatorId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCheckInsId?: string | null,
    goalCheckInsId?: string | null,
    shamerShamingCheckInsId?: string | null,
    checkInCreatorId?: string | null,
  } | null,
};

export type DeleteCheckInMutationVariables = {
  input: DeleteCheckInInput,
  condition?: ModelCheckInConditionInput | null,
};

export type DeleteCheckInMutation = {
  deleteCheckIn?:  {
    __typename: "CheckIn",
    id: string,
    title?: string | null,
    type?: CheckInType | null,
    description?: string | null,
    creator?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deadline?: string | null,
    parentGoal?:  {
      __typename: "Goal",
      name?: string | null,
      title?: string | null,
      description?: string | null,
      deadline?: string | null,
      creator?:  {
        __typename: "User",
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        phoneNumber?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      shamers?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
      shamerShamingGoalId?: string | null,
      goalCreatorId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCheckInsId?: string | null,
    goalCheckInsId?: string | null,
    shamerShamingCheckInsId?: string | null,
    checkInCreatorId?: string | null,
  } | null,
};

export type CreateShamerMutationVariables = {
  input: CreateShamerInput,
  condition?: ModelShamerConditionInput | null,
};

export type CreateShamerMutation = {
  createShamer?:  {
    __typename: "Shamer",
    id: string,
    name?: string | null,
    phoneNumber?: string | null,
    email?: string | null,
    shamingGoal?:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        shamerShamingGoalId?: string | null,
        goalCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    shamingCheckIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    account?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userAssociatedShamesId?: string | null,
    goalShamersId?: string | null,
  } | null,
};

export type UpdateShamerMutationVariables = {
  input: UpdateShamerInput,
  condition?: ModelShamerConditionInput | null,
};

export type UpdateShamerMutation = {
  updateShamer?:  {
    __typename: "Shamer",
    id: string,
    name?: string | null,
    phoneNumber?: string | null,
    email?: string | null,
    shamingGoal?:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        shamerShamingGoalId?: string | null,
        goalCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    shamingCheckIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    account?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userAssociatedShamesId?: string | null,
    goalShamersId?: string | null,
  } | null,
};

export type DeleteShamerMutationVariables = {
  input: DeleteShamerInput,
  condition?: ModelShamerConditionInput | null,
};

export type DeleteShamerMutation = {
  deleteShamer?:  {
    __typename: "Shamer",
    id: string,
    name?: string | null,
    phoneNumber?: string | null,
    email?: string | null,
    shamingGoal?:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        shamerShamingGoalId?: string | null,
        goalCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    shamingCheckIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    account?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userAssociatedShamesId?: string | null,
    goalShamersId?: string | null,
  } | null,
};

export type CreateAICoachMutationVariables = {
  input: CreateAICoachInput,
  condition?: ModelAICoachConditionInput | null,
};

export type CreateAICoachMutation = {
  createAICoach?:  {
    __typename: "AICoach",
    id: string,
    name?: string | null,
    avatar?: AICoachAvatar | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAICoachMutationVariables = {
  input: UpdateAICoachInput,
  condition?: ModelAICoachConditionInput | null,
};

export type UpdateAICoachMutation = {
  updateAICoach?:  {
    __typename: "AICoach",
    id: string,
    name?: string | null,
    avatar?: AICoachAvatar | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAICoachMutationVariables = {
  input: DeleteAICoachInput,
  condition?: ModelAICoachConditionInput | null,
};

export type DeleteAICoachMutation = {
  deleteAICoach?:  {
    __typename: "AICoach",
    id: string,
    name?: string | null,
    avatar?: AICoachAvatar | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phoneNumber?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        shamerShamingGoalId?: string | null,
        goalCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    associatedShames?:  {
      __typename: "ModelShamerConnection",
      items:  Array< {
        __typename: "Shamer",
        id: string,
        name?: string | null,
        phoneNumber?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        userAssociatedShamesId?: string | null,
        goalShamersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGoalQueryVariables = {
  id: string,
};

export type GetGoalQuery = {
  getGoal?:  {
    __typename: "Goal",
    name?: string | null,
    title?: string | null,
    description?: string | null,
    deadline?: string | null,
    creator?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    shamers?:  {
      __typename: "ModelShamerConnection",
      items:  Array< {
        __typename: "Shamer",
        id: string,
        name?: string | null,
        phoneNumber?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        userAssociatedShamesId?: string | null,
        goalShamersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
    shamerShamingGoalId?: string | null,
    goalCreatorId?: string | null,
  } | null,
};

export type ListGoalsQueryVariables = {
  filter?: ModelGoalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGoalsQuery = {
  listGoals?:  {
    __typename: "ModelGoalConnection",
    items:  Array< {
      __typename: "Goal",
      name?: string | null,
      title?: string | null,
      description?: string | null,
      deadline?: string | null,
      creator?:  {
        __typename: "User",
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        phoneNumber?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      shamers?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
      shamerShamingGoalId?: string | null,
      goalCreatorId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCheckInQueryVariables = {
  id: string,
};

export type GetCheckInQuery = {
  getCheckIn?:  {
    __typename: "CheckIn",
    id: string,
    title?: string | null,
    type?: CheckInType | null,
    description?: string | null,
    creator?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deadline?: string | null,
    parentGoal?:  {
      __typename: "Goal",
      name?: string | null,
      title?: string | null,
      description?: string | null,
      deadline?: string | null,
      creator?:  {
        __typename: "User",
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        phoneNumber?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      shamers?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
      shamerShamingGoalId?: string | null,
      goalCreatorId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCheckInsId?: string | null,
    goalCheckInsId?: string | null,
    shamerShamingCheckInsId?: string | null,
    checkInCreatorId?: string | null,
  } | null,
};

export type ListCheckInsQueryVariables = {
  filter?: ModelCheckInFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCheckInsQuery = {
  listCheckIns?:  {
    __typename: "ModelCheckInConnection",
    items:  Array< {
      __typename: "CheckIn",
      id: string,
      title?: string | null,
      type?: CheckInType | null,
      description?: string | null,
      creator?:  {
        __typename: "User",
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        phoneNumber?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      deadline?: string | null,
      parentGoal?:  {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        shamerShamingGoalId?: string | null,
        goalCreatorId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCheckInsId?: string | null,
      goalCheckInsId?: string | null,
      shamerShamingCheckInsId?: string | null,
      checkInCreatorId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetShamerQueryVariables = {
  id: string,
};

export type GetShamerQuery = {
  getShamer?:  {
    __typename: "Shamer",
    id: string,
    name?: string | null,
    phoneNumber?: string | null,
    email?: string | null,
    shamingGoal?:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        shamerShamingGoalId?: string | null,
        goalCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    shamingCheckIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    account?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userAssociatedShamesId?: string | null,
    goalShamersId?: string | null,
  } | null,
};

export type ListShamersQueryVariables = {
  filter?: ModelShamerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShamersQuery = {
  listShamers?:  {
    __typename: "ModelShamerConnection",
    items:  Array< {
      __typename: "Shamer",
      id: string,
      name?: string | null,
      phoneNumber?: string | null,
      email?: string | null,
      shamingGoal?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      shamingCheckIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      account?:  {
        __typename: "User",
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        phoneNumber?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      userAssociatedShamesId?: string | null,
      goalShamersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAICoachQueryVariables = {
  id: string,
};

export type GetAICoachQuery = {
  getAICoach?:  {
    __typename: "AICoach",
    id: string,
    name?: string | null,
    avatar?: AICoachAvatar | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAICoachesQueryVariables = {
  filter?: ModelAICoachFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAICoachesQuery = {
  listAICoaches?:  {
    __typename: "ModelAICoachConnection",
    items:  Array< {
      __typename: "AICoach",
      id: string,
      name?: string | null,
      avatar?: AICoachAvatar | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phoneNumber?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        shamerShamingGoalId?: string | null,
        goalCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    associatedShames?:  {
      __typename: "ModelShamerConnection",
      items:  Array< {
        __typename: "Shamer",
        id: string,
        name?: string | null,
        phoneNumber?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        userAssociatedShamesId?: string | null,
        goalShamersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phoneNumber?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        shamerShamingGoalId?: string | null,
        goalCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    associatedShames?:  {
      __typename: "ModelShamerConnection",
      items:  Array< {
        __typename: "Shamer",
        id: string,
        name?: string | null,
        phoneNumber?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        userAssociatedShamesId?: string | null,
        goalShamersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phoneNumber?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        shamerShamingGoalId?: string | null,
        goalCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    associatedShames?:  {
      __typename: "ModelShamerConnection",
      items:  Array< {
        __typename: "Shamer",
        id: string,
        name?: string | null,
        phoneNumber?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        userAssociatedShamesId?: string | null,
        goalShamersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGoalSubscriptionVariables = {
  filter?: ModelSubscriptionGoalFilterInput | null,
};

export type OnCreateGoalSubscription = {
  onCreateGoal?:  {
    __typename: "Goal",
    name?: string | null,
    title?: string | null,
    description?: string | null,
    deadline?: string | null,
    creator?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    shamers?:  {
      __typename: "ModelShamerConnection",
      items:  Array< {
        __typename: "Shamer",
        id: string,
        name?: string | null,
        phoneNumber?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        userAssociatedShamesId?: string | null,
        goalShamersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
    shamerShamingGoalId?: string | null,
    goalCreatorId?: string | null,
  } | null,
};

export type OnUpdateGoalSubscriptionVariables = {
  filter?: ModelSubscriptionGoalFilterInput | null,
};

export type OnUpdateGoalSubscription = {
  onUpdateGoal?:  {
    __typename: "Goal",
    name?: string | null,
    title?: string | null,
    description?: string | null,
    deadline?: string | null,
    creator?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    shamers?:  {
      __typename: "ModelShamerConnection",
      items:  Array< {
        __typename: "Shamer",
        id: string,
        name?: string | null,
        phoneNumber?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        userAssociatedShamesId?: string | null,
        goalShamersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
    shamerShamingGoalId?: string | null,
    goalCreatorId?: string | null,
  } | null,
};

export type OnDeleteGoalSubscriptionVariables = {
  filter?: ModelSubscriptionGoalFilterInput | null,
};

export type OnDeleteGoalSubscription = {
  onDeleteGoal?:  {
    __typename: "Goal",
    name?: string | null,
    title?: string | null,
    description?: string | null,
    deadline?: string | null,
    creator?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    shamers?:  {
      __typename: "ModelShamerConnection",
      items:  Array< {
        __typename: "Shamer",
        id: string,
        name?: string | null,
        phoneNumber?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        userAssociatedShamesId?: string | null,
        goalShamersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
    shamerShamingGoalId?: string | null,
    goalCreatorId?: string | null,
  } | null,
};

export type OnCreateCheckInSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInFilterInput | null,
};

export type OnCreateCheckInSubscription = {
  onCreateCheckIn?:  {
    __typename: "CheckIn",
    id: string,
    title?: string | null,
    type?: CheckInType | null,
    description?: string | null,
    creator?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deadline?: string | null,
    parentGoal?:  {
      __typename: "Goal",
      name?: string | null,
      title?: string | null,
      description?: string | null,
      deadline?: string | null,
      creator?:  {
        __typename: "User",
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        phoneNumber?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      shamers?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
      shamerShamingGoalId?: string | null,
      goalCreatorId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCheckInsId?: string | null,
    goalCheckInsId?: string | null,
    shamerShamingCheckInsId?: string | null,
    checkInCreatorId?: string | null,
  } | null,
};

export type OnUpdateCheckInSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInFilterInput | null,
};

export type OnUpdateCheckInSubscription = {
  onUpdateCheckIn?:  {
    __typename: "CheckIn",
    id: string,
    title?: string | null,
    type?: CheckInType | null,
    description?: string | null,
    creator?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deadline?: string | null,
    parentGoal?:  {
      __typename: "Goal",
      name?: string | null,
      title?: string | null,
      description?: string | null,
      deadline?: string | null,
      creator?:  {
        __typename: "User",
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        phoneNumber?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      shamers?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
      shamerShamingGoalId?: string | null,
      goalCreatorId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCheckInsId?: string | null,
    goalCheckInsId?: string | null,
    shamerShamingCheckInsId?: string | null,
    checkInCreatorId?: string | null,
  } | null,
};

export type OnDeleteCheckInSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInFilterInput | null,
};

export type OnDeleteCheckInSubscription = {
  onDeleteCheckIn?:  {
    __typename: "CheckIn",
    id: string,
    title?: string | null,
    type?: CheckInType | null,
    description?: string | null,
    creator?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deadline?: string | null,
    parentGoal?:  {
      __typename: "Goal",
      name?: string | null,
      title?: string | null,
      description?: string | null,
      deadline?: string | null,
      creator?:  {
        __typename: "User",
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        phoneNumber?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      shamers?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
      shamerShamingGoalId?: string | null,
      goalCreatorId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCheckInsId?: string | null,
    goalCheckInsId?: string | null,
    shamerShamingCheckInsId?: string | null,
    checkInCreatorId?: string | null,
  } | null,
};

export type OnCreateShamerSubscriptionVariables = {
  filter?: ModelSubscriptionShamerFilterInput | null,
};

export type OnCreateShamerSubscription = {
  onCreateShamer?:  {
    __typename: "Shamer",
    id: string,
    name?: string | null,
    phoneNumber?: string | null,
    email?: string | null,
    shamingGoal?:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        shamerShamingGoalId?: string | null,
        goalCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    shamingCheckIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    account?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userAssociatedShamesId?: string | null,
    goalShamersId?: string | null,
  } | null,
};

export type OnUpdateShamerSubscriptionVariables = {
  filter?: ModelSubscriptionShamerFilterInput | null,
};

export type OnUpdateShamerSubscription = {
  onUpdateShamer?:  {
    __typename: "Shamer",
    id: string,
    name?: string | null,
    phoneNumber?: string | null,
    email?: string | null,
    shamingGoal?:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        shamerShamingGoalId?: string | null,
        goalCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    shamingCheckIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    account?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userAssociatedShamesId?: string | null,
    goalShamersId?: string | null,
  } | null,
};

export type OnDeleteShamerSubscriptionVariables = {
  filter?: ModelSubscriptionShamerFilterInput | null,
};

export type OnDeleteShamerSubscription = {
  onDeleteShamer?:  {
    __typename: "Shamer",
    id: string,
    name?: string | null,
    phoneNumber?: string | null,
    email?: string | null,
    shamingGoal?:  {
      __typename: "ModelGoalConnection",
      items:  Array< {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        shamerShamingGoalId?: string | null,
        goalCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    shamingCheckIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        title?: string | null,
        type?: CheckInType | null,
        description?: string | null,
        deadline?: string | null,
        createdAt: string,
        updatedAt: string,
        userCheckInsId?: string | null,
        goalCheckInsId?: string | null,
        shamerShamingCheckInsId?: string | null,
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    account?:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phoneNumber?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      associatedShames?:  {
        __typename: "ModelShamerConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userAssociatedShamesId?: string | null,
    goalShamersId?: string | null,
  } | null,
};

export type OnCreateAICoachSubscriptionVariables = {
  filter?: ModelSubscriptionAICoachFilterInput | null,
};

export type OnCreateAICoachSubscription = {
  onCreateAICoach?:  {
    __typename: "AICoach",
    id: string,
    name?: string | null,
    avatar?: AICoachAvatar | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAICoachSubscriptionVariables = {
  filter?: ModelSubscriptionAICoachFilterInput | null,
};

export type OnUpdateAICoachSubscription = {
  onUpdateAICoach?:  {
    __typename: "AICoach",
    id: string,
    name?: string | null,
    avatar?: AICoachAvatar | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAICoachSubscriptionVariables = {
  filter?: ModelSubscriptionAICoachFilterInput | null,
};

export type OnDeleteAICoachSubscription = {
  onDeleteAICoach?:  {
    __typename: "AICoach",
    id: string,
    name?: string | null,
    avatar?: AICoachAvatar | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
