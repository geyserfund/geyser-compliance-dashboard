import { gql } from "@apollo/client";

export const GET_COMPLIANCE_DASHBOARD_DATA = gql`
 query ComplianceDashboardData($input: ProjectsGetQueryInput) {
  projectsGet(input: $input) {
    projects {
      status
      id
    } 
  }
}

`