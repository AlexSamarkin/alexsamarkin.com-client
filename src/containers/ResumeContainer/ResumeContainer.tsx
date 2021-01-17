import { connect } from 'react-redux';
import { State, StateSections } from '../../state';
import Resume, { ResumeStateProps } from '../../pages/Resume/Resume';

const mapStateToProps = (state: State): ResumeStateProps => ({
    jobs: state[StateSections.CONTENT].jobs,
    courses: state[StateSections.CONTENT].courses,
    lang: state[StateSections.SETTINGS].lang,
});

export const ResumeContainer = connect(mapStateToProps)(Resume);

export default ResumeContainer;
