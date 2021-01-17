import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { initApp } from '../../actions';
import { State, StateSections } from '../../state';
import { Action } from '../../types';
import App, { AppDispatchProps, AppStateProps } from '../../components/App/App';

const mapStateToProps = (state: State): AppStateProps => ({
    lang: state[StateSections.SETTINGS].lang,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): AppDispatchProps => ({
    onInit: () => dispatch(initApp()),
});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
