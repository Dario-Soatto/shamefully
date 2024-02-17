/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateGoal = /* GraphQL */ `subscription OnCreateGoal($filter: ModelSubscriptionGoalFilterInput) {
  onCreateGoal(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGoalSubscriptionVariables,
  APITypes.OnCreateGoalSubscription
>;
export const onUpdateGoal = /* GraphQL */ `subscription OnUpdateGoal($filter: ModelSubscriptionGoalFilterInput) {
  onUpdateGoal(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGoalSubscriptionVariables,
  APITypes.OnUpdateGoalSubscription
>;
export const onDeleteGoal = /* GraphQL */ `subscription OnDeleteGoal($filter: ModelSubscriptionGoalFilterInput) {
  onDeleteGoal(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGoalSubscriptionVariables,
  APITypes.OnDeleteGoalSubscription
>;
export const onCreateCheckIn = /* GraphQL */ `subscription OnCreateCheckIn($filter: ModelSubscriptionCheckInFilterInput) {
  onCreateCheckIn(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCheckInSubscriptionVariables,
  APITypes.OnCreateCheckInSubscription
>;
export const onUpdateCheckIn = /* GraphQL */ `subscription OnUpdateCheckIn($filter: ModelSubscriptionCheckInFilterInput) {
  onUpdateCheckIn(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCheckInSubscriptionVariables,
  APITypes.OnUpdateCheckInSubscription
>;
export const onDeleteCheckIn = /* GraphQL */ `subscription OnDeleteCheckIn($filter: ModelSubscriptionCheckInFilterInput) {
  onDeleteCheckIn(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCheckInSubscriptionVariables,
  APITypes.OnDeleteCheckInSubscription
>;
export const onCreateUserGoalPartners = /* GraphQL */ `subscription OnCreateUserGoalPartners(
  $filter: ModelSubscriptionUserGoalPartnersFilterInput
) {
  onCreateUserGoalPartners(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserGoalPartnersSubscriptionVariables,
  APITypes.OnCreateUserGoalPartnersSubscription
>;
export const onUpdateUserGoalPartners = /* GraphQL */ `subscription OnUpdateUserGoalPartners(
  $filter: ModelSubscriptionUserGoalPartnersFilterInput
) {
  onUpdateUserGoalPartners(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserGoalPartnersSubscriptionVariables,
  APITypes.OnUpdateUserGoalPartnersSubscription
>;
export const onDeleteUserGoalPartners = /* GraphQL */ `subscription OnDeleteUserGoalPartners(
  $filter: ModelSubscriptionUserGoalPartnersFilterInput
) {
  onDeleteUserGoalPartners(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserGoalPartnersSubscriptionVariables,
  APITypes.OnDeleteUserGoalPartnersSubscription
>;
