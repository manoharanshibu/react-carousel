import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import styled from 'styled-components';
import { ThunkDispatch } from 'redux-thunk';

import {Photo} from './Photo';
import './photos.css';
import { IPhoto } from '../../reducers/photos/models';
import { getPhotos } from '../../actions/photos_action';
import { IStore } from '../../reducers/index';
import { Loader } from '../../utilities/Loader'
import ArrowSVG from './arrow.svg';
// import $ from 'jquery';

interface IProps{
    photos: IPhoto[];
    isLoading: boolean;
}

interface IState{
    isVisible: boolean,
    pageIndex: number,
    numPhotos: number
}

interface IMapStateToProps {
    photos: IPhoto[];
    isLoading: boolean;
}

interface IMapDispatchToProps {
    getPhotos: (onSuccess?: any) => Promise<void>;
}

interface IProps extends IMapStateToProps, IMapDispatchToProps {}

const SSection = styled.div`
    width: 200px;
    padding: 0px;
    display: inline-block;
`;

const SSectionContainer = styled.div`
    position: absolute;
    vertical-align: middle;
    horizontal-align: center;
`;


const ImgArrowLeft = styled.img`
    transform: rotate(180deg);
    float: left;
    cursor: pointer;
    vertical-align: middle;
    horizontal-align: center;
    text-align: center;
`;

const ImgArrowRight = styled.img`
    float: right;
    cursor: pointer;
    vertical-align: middle;
    horizontal-align: center;
    text-align: center;
`;

const imageWidth = 120;

class PhotoList extends Component<IProps, IState>{

    constructor(props?: any){
        super(props);
        this.state = {
            pageIndex: 0,
            isVisible: false,
            numPhotos: this.getNumPhotos()
        };
    }
    componentDidMount(){
        this.props.getPhotos();

        $( window ).resize(() => {
            this.setState({numPhotos: this.getNumPhotos()})
        });
    }

    getNumPhotos = () => {
        const numItems = document.body.offsetWidth / imageWidth;
        if(numItems > 10){
            return 5;
        }else if(numItems > 8){
            return 4;
        }else if(numItems > 7){
            return 3;
        }else if(numItems > 5){
            return 2;
        }
        return 1;
    }

    onNext = (e: any) =>{
       if((this.state.pageIndex + 1) * this.state.numPhotos < this.props.photos.length){
            $("#photoContainer").fadeOut( 600, () => {
                this.setState({ pageIndex: this.state.pageIndex + 1});
                $("#photoContainer").fadeIn();
                const elements  = document.getElementsByClassName("img");
                for(let i =0 ; i < elements.length; i++){
                    elements[i].className = "img img-left"
                }
            });
        }
    }

    onPrevious = (e: any) => {
        e.preventDefault();
       if(this.state.pageIndex > 0){
            $("#photoContainer").fadeOut( 600, () => {
                this.setState({ pageIndex: this.state.pageIndex - 1});
                $("#photoContainer").fadeIn();
                const elements  = document.getElementsByClassName("img");
                for(let i =0 ; i < elements.length; i++){
                    elements[i].className = "img img-right"
                }
            });
        }
    }

    render(){

        if(this.props.isLoading){
            return <Loader />;
        }

        const photosToDisplay = this.props.photos.slice((this.state.pageIndex + 1) * this.state.numPhotos - this.state.numPhotos, (this.state.pageIndex + 1) * this.state.numPhotos);

        const photos = photosToDisplay.map((photo: IPhoto, index: number) => {
                return <SSection key={index} ><Photo
                key={index}
                id={index} 
                title={photo.title}
                thumbnailUrl={photo.thumbnailUrl}
                url={photo.url}
            /></SSection>
        });

        return (
            <SSectionContainer>
                { this.state.numPhotos === 1 && <ImgArrowLeft src={ArrowSVG} onClick={this.onPrevious}/> }
                <div id="photoContainer">
                    {photos}
                </div>
                { this.state.numPhotos !== 1 && <div>
                    <button className="prev-next" onClick={this.onPrevious}>Prev</button>&nbsp;&nbsp;&nbsp;
                    <button className="prev-next" onClick={this.onNext}>Next</button>
                </div> }
                { this.state.numPhotos === 1 && <ImgArrowRight src={ArrowSVG} onClick={this.onNext}/> }
            </SSectionContainer>)
    }
}

const mapStateToProps = (state: IStore): IMapStateToProps => { 
    
    const photosArr = [];  
    for (const item in state.photos) {   
        if (state.photos[item] && state.photos[item] instanceof Object) {
            photosArr.push(state.photos[item])
        }
    }
    
    return ({
        photos: photosArr,
        isLoading: state.photos.isLoading 
    })
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>): IMapDispatchToProps => ({
    getPhotos: (onSuccess?: any) => dispatch(getPhotos(onSuccess)),
});

export const PhotosList = connect(mapStateToProps, mapDispatchToProps)(PhotoList);
