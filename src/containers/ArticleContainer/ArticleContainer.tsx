import { connect } from 'react-redux';
import { State, StateSections } from '../../state';
import { Dispatch } from 'react';
import { Action } from '../../types';
import { loadArticle } from '../../actions';
import ArticlePage, { ArticlePageDispatchProps, ArticlePageStateProps } from '../../pages/Blog/ArticlePage';

const mapStateToProps = (state: State): ArticlePageStateProps => ({
    article: state[StateSections.BLOG].currentArticle,
    lang: state[StateSections.SETTINGS].lang,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): ArticlePageDispatchProps => ({
    load: (slug: string) => dispatch(loadArticle(slug)),
});

export const ArticleContainer = connect(mapStateToProps, mapDispatchToProps)(ArticlePage);

export default ArticleContainer;
