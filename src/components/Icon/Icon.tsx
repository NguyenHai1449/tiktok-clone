import React from 'react';

interface Props {
    type: string;
}

const Icon: React.FC<Props> = ({ type, ...bc }) => {
    return <>{bc}</>;
};

export default Icon;
