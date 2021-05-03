import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increaseSlide, decreaseSlide, resetSlide, slideLength} from '../../Redux/Actions/Actions';
import {SlideShowData} from '../../Components/Slideshow/SlideShowData';
import './_SlideShow.scss';


const SlideShow = () => {
    const dispatch = useDispatch();
    const state = useSelector(state=> state.slide);


    const autoPlayRef = useRef();
    const length = SlideShowData.length;

    useEffect(() => {
        autoPlayRef.current = nextSlide;
     })

     useEffect(() => {
        const playSlide = () =>{
            autoPlayRef.current();
        }
        const interval = setInterval(playSlide, 7000)
     }, [])



const nextSlide = () =>{
  state === length - 1 ? dispatch(resetSlide()) : dispatch(increaseSlide());
}
const prevSlide = () =>{
  state === 0  ?  dispatch(slideLength()) : dispatch(decreaseSlide());
}


    return (

        <section className='slider'>
            <a className='left-arrow' onClick={prevSlide}>&#10094;</a> 
            <a className='right-arrow' onClick={nextSlide} >&#10095;</a>
            {SlideShowData.map((slide, index)=>{
                return(
                    <div className={index === state ? 'slide active' : 'slide'} key={index}>
                        {index=== state && (

                        <img src={slide.image} className='image' />
                        )}
                    </div>
                )
            })}
      
        </section>
    )
}

export default SlideShow;