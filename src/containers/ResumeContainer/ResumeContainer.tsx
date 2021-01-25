import React from 'react';
import { CourseItem, JobItem, Locale } from '../../types';
import { useQuery } from '@apollo/client';
import { GET_JOBS_AND_COURSES } from '../../operations/queries/getJobsAndCourses';
import Preloader from '../../components/Preloader';
import { Resume } from '../../pages/Resume';

export interface ResumeQueryData {
    jobs: JobItem[];
    courses: CourseItem[];
}

export interface ResumeQueryVar {
    locale: Locale;
}

export const ResumeContainer: React.FC<{ lang: Locale }> = ({ lang }) => {
    const { data, loading } = useQuery<ResumeQueryData, ResumeQueryVar>(GET_JOBS_AND_COURSES, {
        variables: {
            locale: lang,
        },
    });

    if (loading || !data) {
        return <Preloader />;
    }

    return <Resume jobs={data.jobs} courses={data.courses} lang={lang} />;
};

export default ResumeContainer;
