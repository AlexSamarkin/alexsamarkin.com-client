import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CV } from '../../operations/queries/getCV';
import ButtonLink from '../../components/ButtonLink';

export interface CVButtonProps {
    title: string;
}

const CVButtonContainer: React.FC<CVButtonProps> = ({ title }) => {
    const { data, loading } = useQuery(GET_CV);

    if (loading) {
        return <ButtonLink disabled={true} title={title} href={''} icon={'icon-download'} />;
    }

    return <ButtonLink title={title} href={data.cv.url} icon={'icon-download'} />;
};

export default CVButtonContainer;
