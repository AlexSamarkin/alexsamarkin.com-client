import { connect } from "react-redux";
import { State, StateSections } from "../../state";
import About, { AboutStateProps } from "../../pages/About/About";

const mapStateToProps = (state: State): AboutStateProps => ({
  text: state[StateSections.CONTENT].texts.about,
  backend: state[StateSections.CONTENT].texts.backend,
  frontend: state[StateSections.CONTENT].texts.frontend,
  lang: state[StateSections.SETTINGS].lang,
});

export const AboutContainer = connect(mapStateToProps)(About);

export default AboutContainer;
