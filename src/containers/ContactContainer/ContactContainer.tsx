import React, { useCallback } from 'react';
import { Locale, SendingStatus } from '../../types';
import { useMutation } from '@apollo/client';
import { SEND_MESSAGE } from '../../operations/mutations/sendMessage';
import Form from '../../components/Form/Form';

export const ContactsContainer: React.FC<{ lang: Locale }> = ({ lang }) => {
    const [sendMessage, { data }] = useMutation(SEND_MESSAGE);
    const onSubmit = useCallback(
        async ({ name, email, message }) => {
            await sendMessage({ variables: { name, email, message } });
        },
        [sendMessage],
    );

    let status: SendingStatus;
    if (!data) {
        status = SendingStatus.IDLE;
    } else {
        status = data.sendMessage ? SendingStatus.SUCCESS : SendingStatus.FAILED;
    }

    return <Form onSubmit={onSubmit} lang={lang} status={status} />;
};
