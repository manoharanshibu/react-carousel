import * as React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';
// import ArrowSVG from './arrow.svg';

const Img = styled.img`
    display: block;
    width: 200px;
    height: auto;
    padding: 10px;
    margin: 0 auto;
`;

const PhotoContainer = styled.div`
    display: block;
`;

interface IPhotoProps {
    id: number;
    thumbnailUrl: string;
    url: string;
    title: string;
};

export const Photo: React.StatelessComponent<IPhotoProps> = (props: IPhotoProps) => {
    return(
        <PhotoContainer>
            <LazyLoad>
                <Img id={'img' + props.id} src={props.thumbnailUrl} alt="" />
            </LazyLoad>
        </PhotoContainer>
    );
}