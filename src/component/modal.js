import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";
import { forwardRef, useState, useRef } from 'react';
import React from 'react';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//컴포넌트
const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    left : 0; top: 0;
    z-index : 60;
    position: fixed;
    display: flex;
    flex-flow: row wrep;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
`
const ModalBox = styled(motion.div)`
    width : 1000px; height : 600px;
    position: relative;
    top:0;
    background-color : #fff;
`
const ModalContent = styled(motion.div)`
`
const SwiperWrap = styled(motion.div)`
   .swiper {
    margin : 40px; 0 0 100px;
    height : 500px; width : 450px;
    justify-content: center;
    j
    .swiper-button-prev {
       width: 35px !important; height :  35px !important
    }
   }
`
const ModalText1 = styled.div`
    position: absolute;
    top:40px; left: 570px;
    .helpus_text1{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px; font-weight: 500;
        margin-top: 20px;
    }
    .intro {
        width:350px;
        margin-top: 20px;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px; font-weight: 500; line-height: 30px;
    }
    .tripPlanner_text1{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px; font-weight: 600;
        margin-top: 40px;
    }
    .github{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 22px; font-weight: 700;
        margin-top: 30px;


    }
    .github:hover{
        cursor : pointer;
    }
`
//컴포넌트

const Modal = forwardRef(({name,closeModal,projectTarget},ref) => {
    function modalContent(name) {

              
        const childrenVariant = {
            initial: { opacity: 0 },
            animate: { opacity: 1},
          };

        if(name==='TripPlanner'){

            return(
                <ModalContent variants={childrenVariant} transition={{duration:1.2}}>
                    <div className='closeModal' onClick={closeModal}>X</div>
                    <SwiperWrap> 
                        <Swiper 
                            modules={[Navigation, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            autoplay={true}
                        >
                            <SwiperSlide><img style={{ height :'500px',width:'450px',objectFit:'contain'}} src={require('../TripPlanner/main.png')}/></SwiperSlide>
                            <SwiperSlide><img style={{ height :'500px',width:'450px',objectFit:'contain'}} src={require('../TripPlanner/Scheduel.png')}/></SwiperSlide>
                            <SwiperSlide><img style={{ height :'500px',width:'450px',objectFit:'contain'}} src={require('../TripPlanner/Login.png')}/></SwiperSlide>
                            <SwiperSlide><img style={{ height :'500px',width:'450px',objectFit:'contain'}} src={require('../TripPlanner/signup.png')}/></SwiperSlide>
                        </Swiper>
                    </SwiperWrap>
                    <ModalText1>
                        <div className='tripPlanner_text1'>프로젝트명 : TripPlanner(개인 프로젝트)</div>
                        <div className='tripPlanner_text1'></div>
                        <div className='tripPlanner_text1'>사용언어 : Spring FrameWork, Javascript, Jquery</div>
                        <div className='tripPlanner_text1'>API : Google Maps Platform</div>
                        <div className='tripPlanner_text1'>DB : Maria DB</div>
                        <motion.div className='github' onClick={() => {window.open("https://github.com/CingDam/TripPlanner")}}>Github</motion.div>
                        <div className='tripPlanner_text1'>설명</div>
                        <div className='intro'>
                            여행 가기 전에 일일히 찾아가면서 일정을 짜기 힘들기 때문에 지도에서 손쉽게 숙소나
                            여행지를 찾아서 일정을 만들 수 있는 사이트 입니다.
                        </div>
                    </ModalText1>
                </ModalContent>
               
            )
        }else if(name==='Helpus'){
            return(
                <ModalContent  variants={childrenVariant} transition={{duration:1.2}}>
                    <div className='closeModal' onClick={closeModal}>X</div>
                    <SwiperWrap> 
                        <Swiper 
                            modules={[Navigation, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            autoplay={true}
                        >
                            <SwiperSlide><img style={{ height :'500px',width:'450px',objectFit:'contain'}} src={require('../Helpus/main.png')}/></SwiperSlide>
                            <SwiperSlide><img style={{ height :'500px',width:'450px',objectFit:'contain'}} src={require('../Helpus/com_main.png')}/></SwiperSlide>
                            <SwiperSlide><img style={{ height :'500px',width:'450px',objectFit:'contain'}} src={require('../Helpus/contract.png')}/></SwiperSlide>
                            <SwiperSlide><img style={{ height :'500px',width:'450px',objectFit:'contain'}} src={require('../Helpus/chat.png')}/></SwiperSlide>
                            <SwiperSlide><img style={{ height :'500px',width:'450px',objectFit:'contain'}} src={require('../Helpus/chat_2.png')}/></SwiperSlide>
                        </Swiper>
                    </SwiperWrap>
                    <ModalText1>
                        <div className='helpus_text1'>프로젝트명 : Helpus(팀 프로젝트)</div>
                        <div className='helpus_text1'></div>
                        <div className='helpus_text1'>인원수  : 3명</div>
                        <div className='helpus_text1'>맡은 역할 : 팀장, UI/UX구현, 백엔드 서브</div>
                        <div className='helpus_text1'>사용언어 : SpringFrameWork, Javascript, Jquery</div>
                        <div className='helpus_text1'>API : Scheduel.js</div>
                        <div className='helpus_text1'>DB : Maria DB</div>
                        <motion.div className='github'  onClick={() => {window.open("https://github.com/CingDam/Helpus")}}>Github</motion.div>
                        <div className='helpus_text1'>설명</div>
                        <div className='intro'>
                            사용자와 사업자간의 매칭 중개 플랫폼으로 사업자가 서비스를 올리면 사용자가 신청하여
                            채팅을 통해 계약을 할수 있는 사이트 입니다.
                        </div>
                    </ModalText1>
                </ModalContent>
            )
        }
    }

    
    const parentVariant  = {
        initial:{ height : '0'}, 
        animate:{ height :'600px' }, 
        transition : {duration: 0.7,staggerDirection: 1}
      };

    return(
        <ModalBackground ref={projectTarget} onClick={closeModal}>
            <ModalBox initial="initial" animate="animate"  transition ={{duration: 0.7,staggerDirection: 1}}  variants={parentVariant}>
                {modalContent(name)}
            </ModalBox>
        </ModalBackground>
       )

})

export {Modal};