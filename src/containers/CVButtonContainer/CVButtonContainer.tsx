import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CV } from '../../operations/queries/getCV';
import ButtonLink from '../../components/ButtonLink';

export interface CVButtonProps {
    title: string;
}

const CVButtonContainer: React.FC<CVButtonProps> = ({ title }) => {
    const { data, loading } = useQuery(GET_CV);
    return <ButtonLink disabled={loading} title={title} href={!loading ? data.cv.url : ''} icon={'icon-download'} />;
};

export default CVButtonContainer;
