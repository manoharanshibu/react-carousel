import * as React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';

const Img = styled.img`
    display: block;
    width: 200px;
    height: auto;
    padding: 10px;
    margin: 0 auto;
    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    transition: opacity 1s ease-in-out;
`;

interface IPhotoProps {
    id: number;
    thumbnailUrl: string;
    url: string;
    title: string;
};

export const Photo: React.StatelessComponent<IPhotoProps> = (props: IPhotoProps) => {
    return(
        <LazyLoad>
            <Img id={'img' + props.id} src={props.thumbnailUrl} alt=""/>
        </LazyLoad>
    );
}