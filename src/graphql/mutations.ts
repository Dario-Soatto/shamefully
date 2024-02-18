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
` as GeneratedMutation<
  APITypes.DeleteCheckInMutationVariables,
  APITypes.DeleteCheckInMutation
>;
export const createShamer = /* GraphQL */ `mutation CreateShamer(
  $input: CreateShamerInput!
  $condition: ModelShamerConditionInput
) {
  createShamer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateShamerMutationVariables,
  APITypes.CreateShamerMutation
>;
export const updateShamer = /* GraphQL */ `mutation UpdateShamer(
  $input: UpdateShamerInput!
  $condition: ModelShamerConditionInput
) {
  updateShamer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateShamerMutationVariables,
  APITypes.UpdateShamerMutation
>;
export const deleteShamer = /* GraphQL */ `mutation DeleteShamer(
  $input: DeleteShamerInput!
  $condition: ModelShamerConditionInput
) {
  deleteShamer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteShamerMutationVariables,
  APITypes.DeleteShamerMutation
>;
export const createAICoach = /* GraphQL */ `mutation CreateAICoach(
  $input: CreateAICoachInput!
  $condition: ModelAICoachConditionInput
) {
  createAICoach(input: $input, condition: $condition) {
    id
    name
    avatar
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAICoachMutationVariables,
  APITypes.CreateAICoachMutation
>;
export const updateAICoach = /* GraphQL */ `mutation UpdateAICoach(
  $input: UpdateAICoachInput!
  $condition: ModelAICoachConditionInput
) {
  updateAICoach(input: $input, condition: $condition) {
    id
    name
    avatar
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAICoachMutationVariables,
  APITypes.UpdateAICoachMutation
>;
export const deleteAICoach = /* GraphQL */ `mutation DeleteAICoach(
  $input: DeleteAICoachInput!
  $condition: ModelAICoachConditionInput
) {
  deleteAICoach(input: $input, condition: $condition) {
    id
    name
    avatar
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAICoachMutationVariables,
  APITypes.DeleteAICoachMutation
>;
