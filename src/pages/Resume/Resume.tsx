import React, { useMemo } from 'react';
import Progress from '../../components/Progress/Progress';
import { Timeline, TimelineArticle } from '../../components/Timeline';
import educationSvg from '../../assets/icons/dark/icon-education.svg';
import expSvg from '../../assets/icons/dark/icon-experience.svg';
import { CourseItem, JobItem, Locale } from '../../types';
import Footer from '../../components/Footer/Footer';
import translates from '../../lang';

export interface ResumeProps {
    jobs: JobItem[];
    courses: CourseItem[];
    lang: Locale;
}

export const Resume: React.FC<ResumeProps> = (props) => {
    const { jobs, courses, lang } = props;
    const t = useMemo(() => translates(lang), [lang]);

    return (
        <>
            <div className="pb-3">
                <h1 className="title title--h1 first-title title__separate">{t('headers.resume')}</h1>
            </div>

            <div className="pb-0">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h2 className="title title--h3">
                            <img className="title-icon" src={educationSvg.toString()} alt="Education" />{' '}
                            {t('headers.education')}
                        </h2>
                        <Timeline>
                            {courses &&
                                courses.map((course: CourseItem) => {
                                    return (
                                        <TimelineArticle
                                            key={course.title}
                                            title={course.title}
                                            yearStart={course.fromYear}
                                            yearEnd={course.toYear || void 0}
                                            description={course.description || void 0}
                                        />
                                    );
                                })}
                        </Timeline>
                    </div>

                    <div className="col-12 col-lg-6">
                        <h2 className="title title--h3">
                            <img className="title-icon" src={expSvg.toString()} alt="" /> {t('headers.experience')}
                        </h2>
                        <Timeline>
                            {jobs &&
                                jobs.map((job: JobItem) => {
                                    return (
                                        <TimelineArticle
                                            key={job.title}
                                            title={job.title}
                                            yearStart={job.fromYear}
                                            description={job.description}
                                            yearEnd={job.toYear ?? undefined}
                                        />
                                    );
                                })}
                        </Timeline>
                    </div>
                </div>
            </div>

            <div className="box-inner box-inner--rounded">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h2 className="title title--h3">{t('headers.frontSkills')}</h2>
                        <div className="box box__second">
                            <Progress min={0} max={100} value={80} title={'JavaScript'} />
                            <Progress min={0} max={100} value={80} title={'TypeScript'} />
                            <Progress min={0} max={100} value={90} title={'React.js'} />
                            <Progress min={0} max={100} value={80} title={'Redux + Redux-Saga'} />
                            <Progress min={0} max={100} value={75} title={'GraphQL'} />
                            <Progress min={0} max={100} value={70} title={'Webpack'} />
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                        <h2 className="title title--h3">{t('headers.backSkills')}</h2>
                        <div className="box box__second">
                            <Progress min={0} max={100} value={70} title={'Node.js'} />
                            <Progress min={0} max={100} value={70} title={'PHP'} />
                            <Progress min={0} max={100} value={70} title={'Next.js'} />
                            <Progress min={0} max={100} value={70} title={'Nest.js'} />
                            <Progress min={0} max={100} value={70} title={'MySQL'} />
                            <Progress min={0} max={100} value={60} title={'SQL'} />
                            <Progress min={0} max={100} value={60} title={'Laravel'} />
                            <Progress min={0} max={100} value={50} title={'Symfony'} />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Resume;
