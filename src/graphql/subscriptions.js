/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
  }
`;
export const onCreateGoal = /* GraphQL */ `
  subscription OnCreateGoal($filter: ModelSubscriptionGoalFilterInput) {
    onCreateGoal(filter: $filter) {
      name
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
  }
`;
export const onUpdateGoal = /* GraphQL */ `
  subscription OnUpdateGoal($filter: ModelSubscriptionGoalFilterInput) {
    onUpdateGoal(filter: $filter) {
      name
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
  }
`;
export const onDeleteGoal = /* GraphQL */ `
  subscription OnDeleteGoal($filter: ModelSubscriptionGoalFilterInput) {
    onDeleteGoal(filter: $filter) {
      name
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
  }
`;
export const onCreateCheckIn = /* GraphQL */ `
  subscription OnCreateCheckIn($filter: ModelSubscriptionCheckInFilterInput) {
    onCreateCheckIn(filter: $filter) {
      id
      title
      type
      description
      creator {
        firstName
        lastName
        email
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
`;
export const onUpdateCheckIn = /* GraphQL */ `
  subscription OnUpdateCheckIn($filter: ModelSubscriptionCheckInFilterInput) {
    onUpdateCheckIn(filter: $filter) {
      id
      title
      type
      description
      creator {
        firstName
        lastName
        email
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
`;
export const onDeleteCheckIn = /* GraphQL */ `
  subscription OnDeleteCheckIn($filter: ModelSubscriptionCheckInFilterInput) {
    onDeleteCheckIn(filter: $filter) {
      id
      title
      type
      description
      creator {
        firstName
        lastName
        email
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
`;
export const onCreateUserGoalPartners = /* GraphQL */ `
  subscription OnCreateUserGoalPartners(
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
        id
        createdAt
        updatedAt
        __typename
      }
      goal {
        name
        description
        deadline
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
`;
export const onUpdateUserGoalPartners = /* GraphQL */ `
  subscription OnUpdateUserGoalPartners(
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
        id
        createdAt
        updatedAt
        __typename
      }
      goal {
        name
        description
        deadline
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
`;
export const onDeleteUserGoalPartners = /* GraphQL */ `
  subscription OnDeleteUserGoalPartners(
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
        id
        createdAt
        updatedAt
        __typename
      }
      goal {
        name
        description
        deadline
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
`;
