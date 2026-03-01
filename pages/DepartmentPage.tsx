import React from 'react';
import { useParams } from 'react-router-dom';
import Schools from '../components/Schools';
import Oratori from '../components/Oratori';
import Famullia from '../components/Famullia';
import QendraDitore from '../components/QendraDitore';
import PlaceholderPage from './PlaceholderPage';

const DepartmentPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    switch (id) {
        case 'shkolla':
            return <Schools />;
        case 'oratori':
            return <Oratori />;
        case 'famullia':
            return <Famullia />;
        case 'qendra-ditore':
            return <QendraDitore />;
        default:
            return <PlaceholderPage title="Faqja nuk u gjend" />;
    }
};

export default DepartmentPage;
