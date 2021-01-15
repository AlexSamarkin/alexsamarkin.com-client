import { connect } from "react-redux";
import { State, StateSections } from "../../state";
import Sidebar, {
  SidebarDispatchProps,
  SidebarStateProps,
} from "../../components/Sidebar/Sidebar";
import { Dispatch } from "react";
import { Action, Locale } from "../../types";
import { toggleLanguage } from "../../actions";

const mapStateToProps = (state: State): SidebarStateProps => ({
  cvUrl: state[StateSections.CONTENT].cvUrl,
  lang: state[StateSections.SETTINGS].lang,
});

const mapDispatchToProps = (
  dispatch: Dispatch<Action>
): SidebarDispatchProps => ({
  onLangChange: (lang: Locale) => dispatch(toggleLanguage(lang)),
});

export const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
