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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCheckInSubscriptionVariables,
  APITypes.OnDeleteCheckInSubscription
>;
export const onCreateShamer = /* GraphQL */ `subscription OnCreateShamer($filter: ModelSubscriptionShamerFilterInput) {
  onCreateShamer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateShamerSubscriptionVariables,
  APITypes.OnCreateShamerSubscription
>;
export const onUpdateShamer = /* GraphQL */ `subscription OnUpdateShamer($filter: ModelSubscriptionShamerFilterInput) {
  onUpdateShamer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateShamerSubscriptionVariables,
  APITypes.OnUpdateShamerSubscription
>;
export const onDeleteShamer = /* GraphQL */ `subscription OnDeleteShamer($filter: ModelSubscriptionShamerFilterInput) {
  onDeleteShamer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteShamerSubscriptionVariables,
  APITypes.OnDeleteShamerSubscription
>;
export const onCreateAICoach = /* GraphQL */ `subscription OnCreateAICoach($filter: ModelSubscriptionAICoachFilterInput) {
  onCreateAICoach(filter: $filter) {
    id
    name
    avatar
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAICoachSubscriptionVariables,
  APITypes.OnCreateAICoachSubscription
>;
export const onUpdateAICoach = /* GraphQL */ `subscription OnUpdateAICoach($filter: ModelSubscriptionAICoachFilterInput) {
  onUpdateAICoach(filter: $filter) {
    id
    name
    avatar
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAICoachSubscriptionVariables,
  APITypes.OnUpdateAICoachSubscription
>;
export const onDeleteAICoach = /* GraphQL */ `subscription OnDeleteAICoach($filter: ModelSubscriptionAICoachFilterInput) {
  onDeleteAICoach(filter: $filter) {
    id
    name
    avatar
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAICoachSubscriptionVariables,
  APITypes.OnDeleteAICoachSubscription
>;
