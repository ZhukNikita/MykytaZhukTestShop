import React from "react";
import slider from './CssModules/ImgSlider.module.css'

class ImgSlider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            imgIndex : 0
        }
        this.slides = this.props.slides
    }
    toNextImg(){
        const isLastSlide = this.state.imgIndex === this.slides.length - 1
        const newIndex = isLastSlide ? 0 : this.state.imgIndex + 1
        this.setState({
            imgIndex : newIndex
        })
    }
    toPrevImg(){
        const isFirstSlide = this.state.imgIndex === 0;
        const newIndex = isFirstSlide ? this.slides.length - 1 : this.state.imgIndex - 1
        this.setState({
            imgIndex : newIndex
        })
    }
    render() {
        return (
            <div style={{width: '200px'}}>
                <img src={this.slides[this.state.imgIndex]} alt="ProductPhoto" height='100%' width='100%'/>
                {
                    this.slides.length > 1 ?
                        <div className={slider.buttons}>
                            <div className={slider.SliderButton} onClick={this.toPrevImg.bind(this)}>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.25 1.06857L1.625 6.6876L7.25 12.3066" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className={slider.SliderButton} onClick={this.toNextImg.bind(this)}>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.75 1.06857L6.375 6.6876L0.75 12.3066" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div> : ''
                }

            </div>
        );
    }
}
export default ImgSlider;