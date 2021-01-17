import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { State, StateSections } from '../../state';
import { sendMessage } from '../../actions';
import { Action } from '../../types';
import Form, { FormDispatchProps, FormStateProps } from '../../components/Form/Form';

const mapStateToProps = (state: State): FormStateProps => ({
    status: state[StateSections.CONTACT].status,
    lang: state[StateSections.SETTINGS].lang,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): FormDispatchProps => ({
    onSubmit: (values) => dispatch(sendMessage(values)),
});

export const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Form);
