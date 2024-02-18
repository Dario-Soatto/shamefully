/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    firstName
    lastName
    email
    phoneNumber
    goals {
      items {
        name
        title
        description
        deadline
        creator {
          firstName
          lastName
          email
          phoneNumber
          goals {
            nextToken
            __typename
          }
          checkIns {
            nextToken
            __typename
          }
          associatedShames {
            nextToken
            __typename
          }
          strikes
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
            status
            icon
            createdAt
            updatedAt
            userCheckInsId
            goalCheckInsId
            shamerShamingCheckInsId
            checkInCreatorId
            __typename
          }
          nextToken
          __typename
        }
        shamers {
          items {
            id
            name
            phoneNumber
            email
            createdAt
            updatedAt
            userAssociatedShamesId
            goalShamersId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        userGoalsId
        shamerShamingGoalId
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
        creator {
          firstName
          lastName
          email
          phoneNumber
          goals {
            nextToken
            __typename
          }
          checkIns {
            nextToken
            __typename
          }
          associatedShames {
            nextToken
            __typename
          }
          strikes
          id
          createdAt
          updatedAt
          __typename
        }
        deadline
        status
        icon
        parentGoal {
          name
          title
          description
          deadline
          creator {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          checkIns {
            nextToken
            __typename
          }
          shamers {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          userGoalsId
          shamerShamingGoalId
          goalCreatorId
          __typename
        }
        createdAt
        updatedAt
        userCheckInsId
        goalCheckInsId
        shamerShamingCheckInsId
        checkInCreatorId
        __typename
      }
      nextToken
      __typename
    }
    associatedShames {
      items {
        id
        name
        phoneNumber
        email
        shamingGoal {
          items {
            name
            title
            description
            deadline
            id
            createdAt
            updatedAt
            userGoalsId
            shamerShamingGoalId
            goalCreatorId
            __typename
          }
          nextToken
          __typename
        }
        shamingCheckIns {
          items {
            id
            title
            type
            description
            deadline
            status
            icon
            createdAt
            updatedAt
            userCheckInsId
            goalCheckInsId
            shamerShamingCheckInsId
            checkInCreatorId
            __typename
          }
          nextToken
          __typename
        }
        account {
          firstName
          lastName
          email
          phoneNumber
          goals {
            nextToken
            __typename
          }
          checkIns {
            nextToken
            __typename
          }
          associatedShames {
            nextToken
            __typename
          }
          strikes
          id
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userAssociatedShamesId
        goalShamersId
        __typename
      }
      nextToken
      __typename
    }
    strikes
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      firstName
      lastName
      email
      phoneNumber
      goals {
        items {
          name
          title
          description
          deadline
          creator {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          checkIns {
            nextToken
            __typename
          }
          shamers {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          userGoalsId
          shamerShamingGoalId
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
          creator {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          deadline
          status
          icon
          parentGoal {
            name
            title
            description
            deadline
            id
            createdAt
            updatedAt
            userGoalsId
            shamerShamingGoalId
            goalCreatorId
            __typename
          }
          createdAt
          updatedAt
          userCheckInsId
          goalCheckInsId
          shamerShamingCheckInsId
          checkInCreatorId
          __typename
        }
        nextToken
        __typename
      }
      associatedShames {
        items {
          id
          name
          phoneNumber
          email
          shamingGoal {
            nextToken
            __typename
          }
          shamingCheckIns {
            nextToken
            __typename
          }
          account {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          userAssociatedShamesId
          goalShamersId
          __typename
        }
        nextToken
        __typename
      }
      strikes
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getGoal = /* GraphQL */ `query GetGoal($id: ID!) {
  getGoal(id: $id) {
    name
    title
    description
    deadline
    creator {
      firstName
      lastName
      email
      phoneNumber
      goals {
        items {
          name
          title
          description
          deadline
          creator {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          checkIns {
            nextToken
            __typename
          }
          shamers {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          userGoalsId
          shamerShamingGoalId
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
          creator {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          deadline
          status
          icon
          parentGoal {
            name
            title
            description
            deadline
            id
            createdAt
            updatedAt
            userGoalsId
            shamerShamingGoalId
            goalCreatorId
            __typename
          }
          createdAt
          updatedAt
          userCheckInsId
          goalCheckInsId
          shamerShamingCheckInsId
          checkInCreatorId
          __typename
        }
        nextToken
        __typename
      }
      associatedShames {
        items {
          id
          name
          phoneNumber
          email
          shamingGoal {
            nextToken
            __typename
          }
          shamingCheckIns {
            nextToken
            __typename
          }
          account {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          userAssociatedShamesId
          goalShamersId
          __typename
        }
        nextToken
        __typename
      }
      strikes
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
        creator {
          firstName
          lastName
          email
          phoneNumber
          goals {
            nextToken
            __typename
          }
          checkIns {
            nextToken
            __typename
          }
          associatedShames {
            nextToken
            __typename
          }
          strikes
          id
          createdAt
          updatedAt
          __typename
        }
        deadline
        status
        icon
        parentGoal {
          name
          title
          description
          deadline
          creator {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          checkIns {
            nextToken
            __typename
          }
          shamers {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          userGoalsId
          shamerShamingGoalId
          goalCreatorId
          __typename
        }
        createdAt
        updatedAt
        userCheckInsId
        goalCheckInsId
        shamerShamingCheckInsId
        checkInCreatorId
        __typename
      }
      nextToken
      __typename
    }
    shamers {
      items {
        id
        name
        phoneNumber
        email
        shamingGoal {
          items {
            name
            title
            description
            deadline
            id
            createdAt
            updatedAt
            userGoalsId
            shamerShamingGoalId
            goalCreatorId
            __typename
          }
          nextToken
          __typename
        }
        shamingCheckIns {
          items {
            id
            title
            type
            description
            deadline
            status
            icon
            createdAt
            updatedAt
            userCheckInsId
            goalCheckInsId
            shamerShamingCheckInsId
            checkInCreatorId
            __typename
          }
          nextToken
          __typename
        }
        account {
          firstName
          lastName
          email
          phoneNumber
          goals {
            nextToken
            __typename
          }
          checkIns {
            nextToken
            __typename
          }
          associatedShames {
            nextToken
            __typename
          }
          strikes
          id
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userAssociatedShamesId
        goalShamersId
        __typename
      }
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    userGoalsId
    shamerShamingGoalId
    goalCreatorId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetGoalQueryVariables, APITypes.GetGoalQuery>;
export const listGoals = /* GraphQL */ `query ListGoals(
  $filter: ModelGoalFilterInput
  $limit: Int
  $nextToken: String
) {
  listGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      name
      title
      description
      deadline
      creator {
        firstName
        lastName
        email
        phoneNumber
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
            shamerShamingGoalId
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
            status
            icon
            createdAt
            updatedAt
            userCheckInsId
            goalCheckInsId
            shamerShamingCheckInsId
            checkInCreatorId
            __typename
          }
          nextToken
          __typename
        }
        associatedShames {
          items {
            id
            name
            phoneNumber
            email
            createdAt
            updatedAt
            userAssociatedShamesId
            goalShamersId
            __typename
          }
          nextToken
          __typename
        }
        strikes
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
          creator {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          deadline
          status
          icon
          parentGoal {
            name
            title
            description
            deadline
            id
            createdAt
            updatedAt
            userGoalsId
            shamerShamingGoalId
            goalCreatorId
            __typename
          }
          createdAt
          updatedAt
          userCheckInsId
          goalCheckInsId
          shamerShamingCheckInsId
          checkInCreatorId
          __typename
        }
        nextToken
        __typename
      }
      shamers {
        items {
          id
          name
          phoneNumber
          email
          shamingGoal {
            nextToken
            __typename
          }
          shamingCheckIns {
            nextToken
            __typename
          }
          account {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          userAssociatedShamesId
          goalShamersId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      userGoalsId
      shamerShamingGoalId
      goalCreatorId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListGoalsQueryVariables, APITypes.ListGoalsQuery>;
export const getCheckIn = /* GraphQL */ `query GetCheckIn($id: ID!) {
  getCheckIn(id: $id) {
    id
    title
    type
    description
    creator {
      firstName
      lastName
      email
      phoneNumber
      goals {
        items {
          name
          title
          description
          deadline
          creator {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          checkIns {
            nextToken
            __typename
          }
          shamers {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          userGoalsId
          shamerShamingGoalId
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
          creator {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          deadline
          status
          icon
          parentGoal {
            name
            title
            description
            deadline
            id
            createdAt
            updatedAt
            userGoalsId
            shamerShamingGoalId
            goalCreatorId
            __typename
          }
          createdAt
          updatedAt
          userCheckInsId
          goalCheckInsId
          shamerShamingCheckInsId
          checkInCreatorId
          __typename
        }
        nextToken
        __typename
      }
      associatedShames {
        items {
          id
          name
          phoneNumber
          email
          shamingGoal {
            nextToken
            __typename
          }
          shamingCheckIns {
            nextToken
            __typename
          }
          account {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          userAssociatedShamesId
          goalShamersId
          __typename
        }
        nextToken
        __typename
      }
      strikes
      id
      createdAt
      updatedAt
      __typename
    }
    deadline
    status
    icon
    parentGoal {
      name
      title
      description
      deadline
      creator {
        firstName
        lastName
        email
        phoneNumber
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
            shamerShamingGoalId
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
            status
            icon
            createdAt
            updatedAt
            userCheckInsId
            goalCheckInsId
            shamerShamingCheckInsId
            checkInCreatorId
            __typename
          }
          nextToken
          __typename
        }
        associatedShames {
          items {
            id
            name
            phoneNumber
            email
            createdAt
            updatedAt
            userAssociatedShamesId
            goalShamersId
            __typename
          }
          nextToken
          __typename
        }
        strikes
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
          creator {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          deadline
          status
          icon
          parentGoal {
            name
            title
            description
            deadline
            id
            createdAt
            updatedAt
            userGoalsId
            shamerShamingGoalId
            goalCreatorId
            __typename
          }
          createdAt
          updatedAt
          userCheckInsId
          goalCheckInsId
          shamerShamingCheckInsId
          checkInCreatorId
          __typename
        }
        nextToken
        __typename
      }
      shamers {
        items {
          id
          name
          phoneNumber
          email
          shamingGoal {
            nextToken
            __typename
          }
          shamingCheckIns {
            nextToken
            __typename
          }
          account {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          userAssociatedShamesId
          goalShamersId
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      userGoalsId
      shamerShamingGoalId
      goalCreatorId
      __typename
    }
    createdAt
    updatedAt
    userCheckInsId
    goalCheckInsId
    shamerShamingCheckInsId
    checkInCreatorId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCheckInQueryVariables,
  APITypes.GetCheckInQuery
>;
export const listCheckIns = /* GraphQL */ `query ListCheckIns(
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
      creator {
        firstName
        lastName
        email
        phoneNumber
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
            shamerShamingGoalId
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
            status
            icon
            createdAt
            updatedAt
            userCheckInsId
            goalCheckInsId
            shamerShamingCheckInsId
            checkInCreatorId
            __typename
          }
          nextToken
          __typename
        }
        associatedShames {
          items {
            id
            name
            phoneNumber
            email
            createdAt
            updatedAt
            userAssociatedShamesId
            goalShamersId
            __typename
          }
          nextToken
          __typename
        }
        strikes
        id
        createdAt
        updatedAt
        __typename
      }
      deadline
      status
      icon
      parentGoal {
        name
        title
        description
        deadline
        creator {
          firstName
          lastName
          email
          phoneNumber
          goals {
            nextToken
            __typename
          }
          checkIns {
            nextToken
            __typename
          }
          associatedShames {
            nextToken
            __typename
          }
          strikes
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
            status
            icon
            createdAt
            updatedAt
            userCheckInsId
            goalCheckInsId
            shamerShamingCheckInsId
            checkInCreatorId
            __typename
          }
          nextToken
          __typename
        }
        shamers {
          items {
            id
            name
            phoneNumber
            email
            createdAt
            updatedAt
            userAssociatedShamesId
            goalShamersId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        userGoalsId
        shamerShamingGoalId
        goalCreatorId
        __typename
      }
      createdAt
      updatedAt
      userCheckInsId
      goalCheckInsId
      shamerShamingCheckInsId
      checkInCreatorId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCheckInsQueryVariables,
  APITypes.ListCheckInsQuery
>;
export const getShamer = /* GraphQL */ `query GetShamer($id: ID!) {
  getShamer(id: $id) {
    id
    name
    phoneNumber
    email
    shamingGoal {
      items {
        name
        title
        description
        deadline
        creator {
          firstName
          lastName
          email
          phoneNumber
          goals {
            nextToken
            __typename
          }
          checkIns {
            nextToken
            __typename
          }
          associatedShames {
            nextToken
            __typename
          }
          strikes
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
            status
            icon
            createdAt
            updatedAt
            userCheckInsId
            goalCheckInsId
            shamerShamingCheckInsId
            checkInCreatorId
            __typename
          }
          nextToken
          __typename
        }
        shamers {
          items {
            id
            name
            phoneNumber
            email
            createdAt
            updatedAt
            userAssociatedShamesId
            goalShamersId
            __typename
          }
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        userGoalsId
        shamerShamingGoalId
        goalCreatorId
        __typename
      }
      nextToken
      __typename
    }
    shamingCheckIns {
      items {
        id
        title
        type
        description
        creator {
          firstName
          lastName
          email
          phoneNumber
          goals {
            nextToken
            __typename
          }
          checkIns {
            nextToken
            __typename
          }
          associatedShames {
            nextToken
            __typename
          }
          strikes
          id
          createdAt
          updatedAt
          __typename
        }
        deadline
        status
        icon
        parentGoal {
          name
          title
          description
          deadline
          creator {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          checkIns {
            nextToken
            __typename
          }
          shamers {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          userGoalsId
          shamerShamingGoalId
          goalCreatorId
          __typename
        }
        createdAt
        updatedAt
        userCheckInsId
        goalCheckInsId
        shamerShamingCheckInsId
        checkInCreatorId
        __typename
      }
      nextToken
      __typename
    }
    account {
      firstName
      lastName
      email
      phoneNumber
      goals {
        items {
          name
          title
          description
          deadline
          creator {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          checkIns {
            nextToken
            __typename
          }
          shamers {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          userGoalsId
          shamerShamingGoalId
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
          creator {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          deadline
          status
          icon
          parentGoal {
            name
            title
            description
            deadline
            id
            createdAt
            updatedAt
            userGoalsId
            shamerShamingGoalId
            goalCreatorId
            __typename
          }
          createdAt
          updatedAt
          userCheckInsId
          goalCheckInsId
          shamerShamingCheckInsId
          checkInCreatorId
          __typename
        }
        nextToken
        __typename
      }
      associatedShames {
        items {
          id
          name
          phoneNumber
          email
          shamingGoal {
            nextToken
            __typename
          }
          shamingCheckIns {
            nextToken
            __typename
          }
          account {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          userAssociatedShamesId
          goalShamersId
          __typename
        }
        nextToken
        __typename
      }
      strikes
      id
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userAssociatedShamesId
    goalShamersId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetShamerQueryVariables, APITypes.GetShamerQuery>;
export const listShamers = /* GraphQL */ `query ListShamers(
  $filter: ModelShamerFilterInput
  $limit: Int
  $nextToken: String
) {
  listShamers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      phoneNumber
      email
      shamingGoal {
        items {
          name
          title
          description
          deadline
          creator {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          checkIns {
            nextToken
            __typename
          }
          shamers {
            nextToken
            __typename
          }
          id
          createdAt
          updatedAt
          userGoalsId
          shamerShamingGoalId
          goalCreatorId
          __typename
        }
        nextToken
        __typename
      }
      shamingCheckIns {
        items {
          id
          title
          type
          description
          creator {
            firstName
            lastName
            email
            phoneNumber
            strikes
            id
            createdAt
            updatedAt
            __typename
          }
          deadline
          status
          icon
          parentGoal {
            name
            title
            description
            deadline
            id
            createdAt
            updatedAt
            userGoalsId
            shamerShamingGoalId
            goalCreatorId
            __typename
          }
          createdAt
          updatedAt
          userCheckInsId
          goalCheckInsId
          shamerShamingCheckInsId
          checkInCreatorId
          __typename
        }
        nextToken
        __typename
      }
      account {
        firstName
        lastName
        email
        phoneNumber
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
            shamerShamingGoalId
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
            status
            icon
            createdAt
            updatedAt
            userCheckInsId
            goalCheckInsId
            shamerShamingCheckInsId
            checkInCreatorId
            __typename
          }
          nextToken
          __typename
        }
        associatedShames {
          items {
            id
            name
            phoneNumber
            email
            createdAt
            updatedAt
            userAssociatedShamesId
            goalShamersId
            __typename
          }
          nextToken
          __typename
        }
        strikes
        id
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userAssociatedShamesId
      goalShamersId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListShamersQueryVariables,
  APITypes.ListShamersQuery
>;
export const getAICoach = /* GraphQL */ `query GetAICoach($id: ID!) {
  getAICoach(id: $id) {
    id
    name
    avatar
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAICoachQueryVariables,
  APITypes.GetAICoachQuery
>;
export const listAICoaches = /* GraphQL */ `query ListAICoaches(
  $filter: ModelAICoachFilterInput
  $limit: Int
  $nextToken: String
) {
  listAICoaches(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      avatar
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAICoachesQueryVariables,
  APITypes.ListAICoachesQuery
>;
