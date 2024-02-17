/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createGoal = /* GraphQL */ `
  mutation CreateGoal(
    $input: CreateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    createGoal(input: $input, condition: $condition) {
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
export const updateGoal = /* GraphQL */ `
  mutation UpdateGoal(
    $input: UpdateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    updateGoal(input: $input, condition: $condition) {
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
export const deleteGoal = /* GraphQL */ `
  mutation DeleteGoal(
    $input: DeleteGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    deleteGoal(input: $input, condition: $condition) {
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
export const createCheckIn = /* GraphQL */ `
  mutation CreateCheckIn(
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
export const updateCheckIn = /* GraphQL */ `
  mutation UpdateCheckIn(
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
export const deleteCheckIn = /* GraphQL */ `
  mutation DeleteCheckIn(
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
export const createUserGoalPartners = /* GraphQL */ `
  mutation CreateUserGoalPartners(
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
export const updateUserGoalPartners = /* GraphQL */ `
  mutation UpdateUserGoalPartners(
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
export const deleteUserGoalPartners = /* GraphQL */ `
  mutation DeleteUserGoalPartners(
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
