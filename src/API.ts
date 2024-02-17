/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  id?: string | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
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
  goals?: ModelGoalConnection | null,
  checkIns?: ModelCheckInConnection | null,
  partnerGoals?: ModelUserGoalPartnersConnection | null,
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
  partners?: ModelUserGoalPartnersConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  userGoalsId?: string | null,
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
  createdAt: string,
  updatedAt: string,
  userCheckInsId?: string | null,
  goalCheckInsId?: string | null,
  checkInCreatorId?: string | null,
};

export enum CheckInType {
  PHOTO = "PHOTO",
  TEXT = "TEXT",
  EMAIL = "EMAIL",
  PHONE_CALL = "PHONE_CALL",
  SOCIAL_MEDIA_POST = "SOCIAL_MEDIA_POST",
}


export type ModelUserGoalPartnersConnection = {
  __typename: "ModelUserGoalPartnersConnection",
  items:  Array<UserGoalPartners | null >,
  nextToken?: string | null,
};

export type UserGoalPartners = {
  __typename: "UserGoalPartners",
  id: string,
  userId: string,
  goalId: string,
  user: User,
  goal: Goal,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
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
  checkInCreatorId?: string | null,
};

export type DeleteCheckInInput = {
  id: string,
};

export type CreateUserGoalPartnersInput = {
  id?: string | null,
  userId: string,
  goalId: string,
};

export type ModelUserGoalPartnersConditionInput = {
  userId?: ModelIDInput | null,
  goalId?: ModelIDInput | null,
  and?: Array< ModelUserGoalPartnersConditionInput | null > | null,
  or?: Array< ModelUserGoalPartnersConditionInput | null > | null,
  not?: ModelUserGoalPartnersConditionInput | null,
};

export type UpdateUserGoalPartnersInput = {
  id: string,
  userId?: string | null,
  goalId?: string | null,
};

export type DeleteUserGoalPartnersInput = {
  id: string,
};

export type ModelUserFilterInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
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
  checkInCreatorId?: ModelIDInput | null,
};

export type ModelUserGoalPartnersFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  goalId?: ModelIDInput | null,
  and?: Array< ModelUserGoalPartnersFilterInput | null > | null,
  or?: Array< ModelUserGoalPartnersFilterInput | null > | null,
  not?: ModelUserGoalPartnersFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionUserGoalPartnersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  goalId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserGoalPartnersFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserGoalPartnersFilterInput | null > | null,
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
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    partnerGoals?:  {
      __typename: "ModelUserGoalPartnersConnection",
      items:  Array< {
        __typename: "UserGoalPartners",
        id: string,
        userId: string,
        goalId: string,
        createdAt: string,
        updatedAt: string,
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
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    partnerGoals?:  {
      __typename: "ModelUserGoalPartnersConnection",
      items:  Array< {
        __typename: "UserGoalPartners",
        id: string,
        userId: string,
        goalId: string,
        createdAt: string,
        updatedAt: string,
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
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    partnerGoals?:  {
      __typename: "ModelUserGoalPartnersConnection",
      items:  Array< {
        __typename: "UserGoalPartners",
        id: string,
        userId: string,
        goalId: string,
        createdAt: string,
        updatedAt: string,
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
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
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
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    partners?:  {
      __typename: "ModelUserGoalPartnersConnection",
      items:  Array< {
        __typename: "UserGoalPartners",
        id: string,
        userId: string,
        goalId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
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
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
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
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    partners?:  {
      __typename: "ModelUserGoalPartnersConnection",
      items:  Array< {
        __typename: "UserGoalPartners",
        id: string,
        userId: string,
        goalId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
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
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
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
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    partners?:  {
      __typename: "ModelUserGoalPartnersConnection",
      items:  Array< {
        __typename: "UserGoalPartners",
        id: string,
        userId: string,
        goalId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
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
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deadline?: string | null,
    createdAt: string,
    updatedAt: string,
    userCheckInsId?: string | null,
    goalCheckInsId?: string | null,
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
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deadline?: string | null,
    createdAt: string,
    updatedAt: string,
    userCheckInsId?: string | null,
    goalCheckInsId?: string | null,
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
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deadline?: string | null,
    createdAt: string,
    updatedAt: string,
    userCheckInsId?: string | null,
    goalCheckInsId?: string | null,
    checkInCreatorId?: string | null,
  } | null,
};

export type CreateUserGoalPartnersMutationVariables = {
  input: CreateUserGoalPartnersInput,
  condition?: ModelUserGoalPartnersConditionInput | null,
};

export type CreateUserGoalPartnersMutation = {
  createUserGoalPartners?:  {
    __typename: "UserGoalPartners",
    id: string,
    userId: string,
    goalId: string,
    user:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    goal:  {
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
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partners?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
      goalCreatorId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserGoalPartnersMutationVariables = {
  input: UpdateUserGoalPartnersInput,
  condition?: ModelUserGoalPartnersConditionInput | null,
};

export type UpdateUserGoalPartnersMutation = {
  updateUserGoalPartners?:  {
    __typename: "UserGoalPartners",
    id: string,
    userId: string,
    goalId: string,
    user:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    goal:  {
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
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partners?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
      goalCreatorId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserGoalPartnersMutationVariables = {
  input: DeleteUserGoalPartnersInput,
  condition?: ModelUserGoalPartnersConditionInput | null,
};

export type DeleteUserGoalPartnersMutation = {
  deleteUserGoalPartners?:  {
    __typename: "UserGoalPartners",
    id: string,
    userId: string,
    goalId: string,
    user:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    goal:  {
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
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partners?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
      goalCreatorId?: string | null,
    },
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
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    partnerGoals?:  {
      __typename: "ModelUserGoalPartnersConnection",
      items:  Array< {
        __typename: "UserGoalPartners",
        id: string,
        userId: string,
        goalId: string,
        createdAt: string,
        updatedAt: string,
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
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
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
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
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
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    partners?:  {
      __typename: "ModelUserGoalPartnersConnection",
      items:  Array< {
        __typename: "UserGoalPartners",
        id: string,
        userId: string,
        goalId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
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
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partners?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
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
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deadline?: string | null,
    createdAt: string,
    updatedAt: string,
    userCheckInsId?: string | null,
    goalCheckInsId?: string | null,
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
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      deadline?: string | null,
      createdAt: string,
      updatedAt: string,
      userCheckInsId?: string | null,
      goalCheckInsId?: string | null,
      checkInCreatorId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserGoalPartnersQueryVariables = {
  id: string,
};

export type GetUserGoalPartnersQuery = {
  getUserGoalPartners?:  {
    __typename: "UserGoalPartners",
    id: string,
    userId: string,
    goalId: string,
    user:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    goal:  {
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
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partners?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
      goalCreatorId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserGoalPartnersQueryVariables = {
  filter?: ModelUserGoalPartnersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserGoalPartnersQuery = {
  listUserGoalPartners?:  {
    __typename: "ModelUserGoalPartnersConnection",
    items:  Array< {
      __typename: "UserGoalPartners",
      id: string,
      userId: string,
      goalId: string,
      user:  {
        __typename: "User",
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      goal:  {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        goalCreatorId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserGoalPartnersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserGoalPartnersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserGoalPartnersByUserIdQuery = {
  userGoalPartnersByUserId?:  {
    __typename: "ModelUserGoalPartnersConnection",
    items:  Array< {
      __typename: "UserGoalPartners",
      id: string,
      userId: string,
      goalId: string,
      user:  {
        __typename: "User",
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      goal:  {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        goalCreatorId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserGoalPartnersByGoalIdQueryVariables = {
  goalId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserGoalPartnersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserGoalPartnersByGoalIdQuery = {
  userGoalPartnersByGoalId?:  {
    __typename: "ModelUserGoalPartnersConnection",
    items:  Array< {
      __typename: "UserGoalPartners",
      id: string,
      userId: string,
      goalId: string,
      user:  {
        __typename: "User",
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      goal:  {
        __typename: "Goal",
        name?: string | null,
        title?: string | null,
        description?: string | null,
        deadline?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
        goalCreatorId?: string | null,
      },
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
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    partnerGoals?:  {
      __typename: "ModelUserGoalPartnersConnection",
      items:  Array< {
        __typename: "UserGoalPartners",
        id: string,
        userId: string,
        goalId: string,
        createdAt: string,
        updatedAt: string,
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
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    partnerGoals?:  {
      __typename: "ModelUserGoalPartnersConnection",
      items:  Array< {
        __typename: "UserGoalPartners",
        id: string,
        userId: string,
        goalId: string,
        createdAt: string,
        updatedAt: string,
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
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    partnerGoals?:  {
      __typename: "ModelUserGoalPartnersConnection",
      items:  Array< {
        __typename: "UserGoalPartners",
        id: string,
        userId: string,
        goalId: string,
        createdAt: string,
        updatedAt: string,
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
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
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
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    partners?:  {
      __typename: "ModelUserGoalPartnersConnection",
      items:  Array< {
        __typename: "UserGoalPartners",
        id: string,
        userId: string,
        goalId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
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
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
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
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    partners?:  {
      __typename: "ModelUserGoalPartnersConnection",
      items:  Array< {
        __typename: "UserGoalPartners",
        id: string,
        userId: string,
        goalId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
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
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
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
        checkInCreatorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    partners?:  {
      __typename: "ModelUserGoalPartnersConnection",
      items:  Array< {
        __typename: "UserGoalPartners",
        id: string,
        userId: string,
        goalId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
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
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deadline?: string | null,
    createdAt: string,
    updatedAt: string,
    userCheckInsId?: string | null,
    goalCheckInsId?: string | null,
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
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deadline?: string | null,
    createdAt: string,
    updatedAt: string,
    userCheckInsId?: string | null,
    goalCheckInsId?: string | null,
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
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    deadline?: string | null,
    createdAt: string,
    updatedAt: string,
    userCheckInsId?: string | null,
    goalCheckInsId?: string | null,
    checkInCreatorId?: string | null,
  } | null,
};

export type OnCreateUserGoalPartnersSubscriptionVariables = {
  filter?: ModelSubscriptionUserGoalPartnersFilterInput | null,
};

export type OnCreateUserGoalPartnersSubscription = {
  onCreateUserGoalPartners?:  {
    __typename: "UserGoalPartners",
    id: string,
    userId: string,
    goalId: string,
    user:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    goal:  {
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
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partners?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
      goalCreatorId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserGoalPartnersSubscriptionVariables = {
  filter?: ModelSubscriptionUserGoalPartnersFilterInput | null,
};

export type OnUpdateUserGoalPartnersSubscription = {
  onUpdateUserGoalPartners?:  {
    __typename: "UserGoalPartners",
    id: string,
    userId: string,
    goalId: string,
    user:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    goal:  {
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
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partners?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
      goalCreatorId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserGoalPartnersSubscriptionVariables = {
  filter?: ModelSubscriptionUserGoalPartnersFilterInput | null,
};

export type OnDeleteUserGoalPartnersSubscription = {
  onDeleteUserGoalPartners?:  {
    __typename: "UserGoalPartners",
    id: string,
    userId: string,
    goalId: string,
    user:  {
      __typename: "User",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      goals?:  {
        __typename: "ModelGoalConnection",
        nextToken?: string | null,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partnerGoals?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    goal:  {
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
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
      } | null,
      partners?:  {
        __typename: "ModelUserGoalPartnersConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
      goalCreatorId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
