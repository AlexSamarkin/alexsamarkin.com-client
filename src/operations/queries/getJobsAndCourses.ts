import { gql } from '@apollo/client';

export const GET_JOBS_AND_COURSES = gql`
    query GetJobsAndCourses($locale: String!) {
        jobs(locale: $locale) {
            title
            description
            fromYear
            toYear
        }
        courses(locale: $locale) {
            title
            description
            fromYear
            toYear
        }
    }
`;
