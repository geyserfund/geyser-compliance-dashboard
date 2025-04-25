import { gql } from '@apollo/client';

export const PROJECT_PUT_IN_REVIEW = gql`
  mutation ProjectPutInReview($input: ProjectPutInReviewMutationInput!) {
    projectPutInReview(input: $input) {
      id
      status
      rejectionReason
    }
  }
`;

export const PROJECT_CLOSE = gql`
  mutation ProjectClose($input: ProjectCloseMutationInput!) {
    projectClose(input: $input) {
      id
      status
      rejectionReason
    }
  }
`; 