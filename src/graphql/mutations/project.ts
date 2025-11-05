import { gql } from '@apollo/client';

export const PROJECT_REVIEW_SUBMIT = gql`
  mutation ProjectReviewSubmit($input: ProjectReviewSubmitInput!) {
    projectReviewSubmit(input: $input) {
      id
      projectId
      status
      rejectionReasons
      reviewNotes
      reviewedAt
      createdAt
      updatedAt
    }
  }
`;

export const PROJECT_STATUS_UPDATE = gql`
  mutation ProjectStatusUpdate($input: ProjectStatusUpdate!) {
    projectStatusUpdate(input: $input) {
      id
      status
      launchedAt
      preLaunchedAt
    }
  }
`; 