import { connect } from "react-redux";
import { State, StateSections } from "../../state";
import List, { ListDispatchProps, ListStateProps } from "../../pages/Blog/List";
import { Dispatch } from "react";
import { Action } from "../../types";
import { loadArticles } from "../../actions";

const mapStateToProps = (state: State): ListStateProps => ({
  articles: state[StateSections.BLOG].articles,
  lang: state[StateSections.SETTINGS].lang,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): ListDispatchProps => ({
  load: () => dispatch(loadArticles()),
});

export const ArticlesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ArticlesContainer;
