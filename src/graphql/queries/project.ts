import { gql } from '@apollo/client';

// Fragment to ensure we fetch consistent Project fields
// Adjust fields as needed for the ProjectsTable display
const PROJECT_FIELDS_FRAGMENT = gql`
  fragment ProjectFields on Project {
    id
    title
    name # Needed for URL generation if not directly available
    status
    launchedAt
    rejectionReason # Added this field
    # Add other fields required by ProjectsTable (like images, rejectionReason, etc.)
    # rejectionReason # Example: Uncomment if needed
    # thumbnailImage # Example
    owners {
      user {
        id
        username
      }
    }
    createdAt # Although we sort by launchedAt, let's fetch createdAt for display
    # balance # Example if needed
    # location { country { code name } region } # Example
  }
`;

export const GET_PROJECTS = gql`
  ${PROJECT_FIELDS_FRAGMENT}
  query ProjectsGet($input: ProjectsGetQueryInput!) {
    projectsGet(input: $input) {
      projects {
        ...ProjectFields
        # Include fields specific to this table/view if not in fragment
        # Example: Add fields used in ProjectsTable that might not be globally needed
        # rejectionReason # Temporary field used in mock data, may not exist on Project type directly
      }
      # We need cursor information for pagination. Assuming the response structure
      # might need adjustment based on actual backend implementation or if using relay-style pagination.
      # For now, let's assume the 'projects' array is what we get and we derive the cursor manually.
      # If the API provides explicit pagination info (hasNextPage, endCursor), include it here.
      # Example:
      # pageInfo {
      #   hasNextPage
      #   endCursor
      # }
    }
  }
`; 