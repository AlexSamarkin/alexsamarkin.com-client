import React, { useMemo } from 'react';
import Input from './Input';
import { Field, Form as FinalForm } from 'react-final-form';
import { Locale, SendingStatus } from '../../types';
import translates from '../../lang';

export interface Errors {
    name?: boolean;
    email?: boolean;
    message?: boolean;
}

export interface FormStateProps {
    status: SendingStatus;
    lang: Locale;
}

export interface FormDispatchProps {
    onSubmit: (values: Record<string, string | number | boolean>) => void;
}

const validation = (values: Record<string, string | number | boolean>): Errors => {
    const errors: Errors = {};
    const validateEmail = (email: string) => {
        const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        return Boolean(reg.test(email));
    };
    if (!values.name) {
        errors.name = true;
    }
    if (!values.email || !validateEmail(String(values.email))) {
        errors.email = true;
    }
    if (!values.message) {
        errors.message = true;
    }
    return errors;
};

const Form: React.FC<FormStateProps & FormDispatchProps> = ({ onSubmit, status, lang }) => {
    const t = useMemo(() => translates(lang), [lang]);
    return (
        <>
            <FinalForm
                validate={validation}
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting }) => (
                    <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-12 col-md-6">
                                <i className="font-icon icon-user" />
                                <Field name="name">
                                    {({ input, meta }) => (
                                        <Input
                                            {...input}
                                            isError={meta.error && meta.touched}
                                            id={'name'}
                                            type={'text'}
                                            placeholder={String(t('captions.name'))}
                                            required={true}
                                        />
                                    )}
                                </Field>
                                <div className="help-block with-errors" />
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <i className="font-icon icon-envelope" />
                                <Field name="email">
                                    {({ input, meta }) => (
                                        <Input
                                            {...input}
                                            isError={meta.error && meta.touched}
                                            id={'email'}
                                            type={'email'}
                                            placeholder={'Email'}
                                            required={true}
                                        />
                                    )}
                                </Field>
                                <div className="help-block with-errors" />
                            </div>
                            <div className="form-group col-12 col-md-12">
                                <Field name="message">
                                    {({ input, meta }) => (
                                        <Input
                                            {...input}
                                            isError={meta.error && meta.touched}
                                            id={'message'}
                                            type={'textarea'}
                                            placeholder={String(t('captions.message'))}
                                            required={true}
                                        />
                                    )}
                                </Field>
                                <div className="help-block with-errors" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
                                <div id="validator-contact" className="hidden" />
                            </div>
                            <div className="col-12 col-md-6 order-1 order-md-2 text-right">
                                <button disabled={submitting} type="submit" className="btn">
                                    <i className="font-icon icon-send" /> {t('buttons.sendMessage')}
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            />
            <br />
            {status && status === SendingStatus.SUCCESS && <p>Thank you! I will read your message and answer soon!</p>}
            {status && status === SendingStatus.FAILED && <p>Oooops... Something went wrong, try later </p>}
        </>
    );
};

export default Form;
