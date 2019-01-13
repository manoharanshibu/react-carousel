import * as React from 'react';
import styled from 'styled-components';
import '../index.css';

const SWrapper: any = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.7);
`;

export const Loader: React.StatelessComponent = () => (
    <SWrapper>
        <div id="loading" />
    </SWrapper>
);