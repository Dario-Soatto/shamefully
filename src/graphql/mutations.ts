/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    firstName
    lastName
    email
    goals {
      items {
        name
        title
        description
        deadline
        id
        createdAt
        updatedAt
        userGoalsId
        goalCreatorId
        __typename
      }
      nextToken
      __typename
    }
    checkIns {
      items {
        id
        title
        type
        description
        deadline
        createdAt
        updatedAt
        userCheckInsId
        goalCheckInsId
        checkInCreatorId
        __typename
      }
      nextToken
      __typename
    }
    partnerGoals {
      items {
        id
        userId
        goalId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    firstName
    lastName
    email
    goals {
      items {
        name
        title
        description
        deadline
        id
        createdAt
        updatedAt
        userGoalsId
        goalCreatorId
        __typename
      }
      nextToken
      __typename
    }
    checkIns {
      items {
        id
        title
        type
        description
        deadline
        createdAt
        updatedAt
        userCheckInsId
        goalCheckInsId
        checkInCreatorId
        __typename
      }
      nextToken
      __typename
    }
    partnerGoals {
      items {
        id
        userId
        goalId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    firstName
    lastName
    email
    goals {
      items {
        name
        title
        description
        deadline
        id
        createdAt
        updatedAt
        userGoalsId
        goalCreatorId
        __typename
      }
      nextToken
      __typename
    }
    checkIns {
      items {
        id
        title
        type
        description
        deadline
        createdAt
        updatedAt
        userCheckInsId
        goalCheckInsId
        checkInCreatorId
        __typename
      }
      nextToken
      __typename
    }
    partnerGoals {
      items {
        id
        userId
        goalId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createGoal = /* GraphQL */ `mutation CreateGoal(
  $input: CreateGoalInput!
  $condition: ModelGoalConditionInput
) {
  createGoal(input: $input, condition: $condition) {
    name
    title
    description
    deadline
    creator {
      firstName
      lastName
      email
      goals {
        nextToken
        __typename
      }
      checkIns {
        nextToken
        __typename
      }
      partnerGoals {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
    checkIns {
      items {
        id
        title
        type
        description
        deadline
        createdAt
        updatedAt
        userCheckInsId
        goalCheckInsId
        checkInCreatorId
        __typename
      }
      nextToken
      __typename
    }
    partners {
      items {
        id
        userId
        goalId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    userGoalsId
    goalCreatorId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGoalMutationVariables,
  APITypes.CreateGoalMutation
>;
export const updateGoal = /* GraphQL */ `mutation UpdateGoal(
  $input: UpdateGoalInput!
  $condition: ModelGoalConditionInput
) {
  updateGoal(input: $input, condition: $condition) {
    name
    title
    description
    deadline
    creator {
      firstName
      lastName
      email
      goals {
        nextToken
        __typename
      }
      checkIns {
        nextToken
        __typename
      }
      partnerGoals {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
    checkIns {
      items {
        id
        title
        type
        description
        deadline
        createdAt
        updatedAt
        userCheckInsId
        goalCheckInsId
        checkInCreatorId
        __typename
      }
      nextToken
      __typename
    }
    partners {
      items {
        id
        userId
        goalId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    userGoalsId
    goalCreatorId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGoalMutationVariables,
  APITypes.UpdateGoalMutation
>;
export const deleteGoal = /* GraphQL */ `mutation DeleteGoal(
  $input: DeleteGoalInput!
  $condition: ModelGoalConditionInput
) {
  deleteGoal(input: $input, condition: $condition) {
    name
    title
    description
    deadline
    creator {
      firstName
      lastName
      email
      goals {
        nextToken
        __typename
      }
      checkIns {
        nextToken
        __typename
      }
      partnerGoals {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
    checkIns {
      items {
        id
        title
        type
        description
        deadline
        createdAt
        updatedAt
        userCheckInsId
        goalCheckInsId
        checkInCreatorId
        __typename
      }
      nextToken
      __typename
    }
    partners {
      items {
        id
        userId
        goalId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    userGoalsId
    goalCreatorId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGoalMutationVariables,
  APITypes.DeleteGoalMutation
>;
export const createCheckIn = /* GraphQL */ `mutation CreateCheckIn(
  $input: CreateCheckInInput!
  $condition: ModelCheckInConditionInput
) {
  createCheckIn(input: $input, condition: $condition) {
    id
    title
    type
    description
    creator {
      firstName
      lastName
      email
      goals {
        nextToken
        __typename
      }
      checkIns {
        nextToken
        __typename
      }
      partnerGoals {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
    deadline
    createdAt
    updatedAt
    userCheckInsId
    goalCheckInsId
    checkInCreatorId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCheckInMutationVariables,
  APITypes.CreateCheckInMutation
>;
export const updateCheckIn = /* GraphQL */ `mutation UpdateCheckIn(
  $input: UpdateCheckInInput!
  $condition: ModelCheckInConditionInput
) {
  updateCheckIn(input: $input, condition: $condition) {
    id
    title
    type
    description
    creator {
      firstName
      lastName
      email
      goals {
        nextToken
        __typename
      }
      checkIns {
        nextToken
        __typename
      }
      partnerGoals {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
    deadline
    createdAt
    updatedAt
    userCheckInsId
    goalCheckInsId
    checkInCreatorId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCheckInMutationVariables,
  APITypes.UpdateCheckInMutation
>;
export const deleteCheckIn = /* GraphQL */ `mutation DeleteCheckIn(
  $input: DeleteCheckInInput!
  $condition: ModelCheckInConditionInput
) {
  deleteCheckIn(input: $input, condition: $condition) {
    id
    title
    type
    description
    creator {
      firstName
      lastName
      email
      goals {
        nextToken
        __typename
      }
      checkIns {
        nextToken
        __typename
      }
      partnerGoals {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
    deadline
    createdAt
    updatedAt
    userCheckInsId
    goalCheckInsId
    checkInCreatorId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCheckInMutationVariables,
  APITypes.DeleteCheckInMutation
>;
export const createUserGoalPartners = /* GraphQL */ `mutation CreateUserGoalPartners(
  $input: CreateUserGoalPartnersInput!
  $condition: ModelUserGoalPartnersConditionInput
) {
  createUserGoalPartners(input: $input, condition: $condition) {
    id
    userId
    goalId
    user {
      firstName
      lastName
      email
      goals {
        nextToken
        __typename
      }
      checkIns {
        nextToken
        __typename
      }
      partnerGoals {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
    goal {
      name
      title
      description
      deadline
      creator {
        firstName
        lastName
        email
        id
        createdAt
        updatedAt
        __typename
      }
      checkIns {
        nextToken
        __typename
      }
      partners {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      userGoalsId
      goalCreatorId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserGoalPartnersMutationVariables,
  APITypes.CreateUserGoalPartnersMutation
>;
export const updateUserGoalPartners = /* GraphQL */ `mutation UpdateUserGoalPartners(
  $input: UpdateUserGoalPartnersInput!
  $condition: ModelUserGoalPartnersConditionInput
) {
  updateUserGoalPartners(input: $input, condition: $condition) {
    id
    userId
    goalId
    user {
      firstName
      lastName
      email
      goals {
        nextToken
        __typename
      }
      checkIns {
        nextToken
        __typename
      }
      partnerGoals {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
    goal {
      name
      title
      description
      deadline
      creator {
        firstName
        lastName
        email
        id
        createdAt
        updatedAt
        __typename
      }
      checkIns {
        nextToken
        __typename
      }
      partners {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      userGoalsId
      goalCreatorId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserGoalPartnersMutationVariables,
  APITypes.UpdateUserGoalPartnersMutation
>;
export const deleteUserGoalPartners = /* GraphQL */ `mutation DeleteUserGoalPartners(
  $input: DeleteUserGoalPartnersInput!
  $condition: ModelUserGoalPartnersConditionInput
) {
  deleteUserGoalPartners(input: $input, condition: $condition) {
    id
    userId
    goalId
    user {
      firstName
      lastName
      email
      goals {
        nextToken
        __typename
      }
      checkIns {
        nextToken
        __typename
      }
      partnerGoals {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
    goal {
      name
      title
      description
      deadline
      creator {
        firstName
        lastName
        email
        id
        createdAt
        updatedAt
        __typename
      }
      checkIns {
        nextToken
        __typename
      }
      partners {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      userGoalsId
      goalCreatorId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserGoalPartnersMutationVariables,
  APITypes.DeleteUserGoalPartnersMutation
>;
