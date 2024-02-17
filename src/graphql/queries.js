/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        firstName
        lastName
        email
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGoal = /* GraphQL */ `
  query GetGoal($id: ID!) {
    getGoal(id: $id) {
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
export const listGoals = /* GraphQL */ `
  query ListGoals(
    $filter: ModelGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCheckIn = /* GraphQL */ `
  query GetCheckIn($id: ID!) {
    getCheckIn(id: $id) {
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
export const listCheckIns = /* GraphQL */ `
  query ListCheckIns(
    $filter: ModelCheckInFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCheckIns(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getUserGoalPartners = /* GraphQL */ `
  query GetUserGoalPartners($id: ID!) {
    getUserGoalPartners(id: $id) {
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
export const listUserGoalPartners = /* GraphQL */ `
  query ListUserGoalPartners(
    $filter: ModelUserGoalPartnersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGoalPartners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const userGoalPartnersByUserId = /* GraphQL */ `
  query UserGoalPartnersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserGoalPartnersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userGoalPartnersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const userGoalPartnersByGoalId = /* GraphQL */ `
  query UserGoalPartnersByGoalId(
    $goalId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserGoalPartnersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userGoalPartnersByGoalId(
      goalId: $goalId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
