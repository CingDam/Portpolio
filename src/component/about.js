import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";
import { forwardRef, useState, useRef } from 'react';
import React from 'react';

/*컴포넌트 */
const AboutWrap = styled.div`
    padding : 50px 0;
`
const AboutmeContainer = styled.div`
margin : 50px 0 50px 0;
display : flex;
justify-content: center;
`
const Content1 = styled(motion.div)`
&& > .text_about {
display : flex;
}
&& .text_about > .subhead_about {
margin : 25px 0 5px 50px;
font-size : 18px;
font-weight : 700;
}  && .text_about > .main_content {
margin : 25px 50px 5px 12px;
font-size : 18px;
font-weight : 700;
}
`
const Content2 = styled(motion.div)`
font-size : 16px; font-weight : 700;
margin : 20px 0;
width : 750px;
line-height : 36px;
`
/*컴포넌트 */



const Aboutme = forwardRef(({aboutRef},ref) => {

   
    return (
        <AboutWrap ref={aboutRef}>
            <h1>About me</h1>
            <AboutmeContainer>
                <Content1>
                    <div className='text_about'><div className='subhead_about'>이름 :</div><div className='main_content'>정제원</div></div>
                    <div className='text_about'><div className='subhead_about'>주소 :</div><div className='main_content'>대전광역시 동구 자양동</div></div>
                    <div className='text_about'><div className='subhead_about'>최종 학력 :</div><div className='main_content'>한국폴리텍IV 대전캠퍼스 스마트소프웨어과 졸업</div></div>
                </Content1>
                <Content2>
                    안녕하세요. 신입 개발자 정제원입니다.
                    대학을 다니면서 Spring framework(MVC 패턴)를 기반으로 웹 개발의 기초를 배웠으며
                    개인 프로젝트와 팀 프로젝트 총 2개의 프로젝트를 진행해보았습니다.<br/>
                    현재 부족한 점이 많지만, 꾸준히 노력해나가면서 발전하는 개발자가 되도록 노력하겠습니다.
                </Content2>
            </AboutmeContainer>
        </AboutWrap>
    )
}) 

export {Aboutme};