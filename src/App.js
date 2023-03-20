import './App.css';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";
import { forwardRef, useState, useEffect, useRef } from 'react';
import {Skills} from './component/skills.js';
import {Project} from './component/project.js';
import {Aboutme} from './component/about.js';
//컴포넌트
//메인
const MainWrap = styled.div`
    Width:100vw; height : 100vh;
    background-color : #005281;
    div{
      text-align: center;
      color: white;
    }
    .subhead1 {
      font-family: 'Noto Sans KR', sans-serif;
      font-size : 48px; font-weight : 300;
      padding-top : 35vh;
    }
    .subhead2 {
      font-family: 'Noto Sans KR', sans-serif;
      font-size : 54px; font-weight : 700;
    }
`
const MoveButton = styled(motion.button)`
    margin : 20vh 0 0 42.2vw; 
    width : 300px; height : 60px;
    border : none;
    background-color : white;
    border-radius : 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size : 24px; font-weight : 700;
    &:hover{
        cursor:pointer;
    }

`
//메인
//헤더
const HeaderWrap = styled.div`
    height:50px; width : 100vw;
    background-color: ${props => props.color};
    position: fixed;
    top:0;
    z-index : 50;
    
`
const HeaderContent = styled.div`
  margin : 0 auto;
  width : max-content;
`
const HeaderSubheader = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size : 16px; font-weight : 700;
  color : ${props => props.fontColor};
  display : inline-block;
  margin : 10px 20px;\
  &:hover {
    cursor:pointer;
    font-weight : 900;
  }
`
//헤더
//컴포넌트
function App() {
  const aboutMeRef = useRef();
  const mainRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();

  function moveTab(e) {
    if (e.target.outerText === "Main"){
      window.scrollTo({top :0,left : 0,behavior:'smooth'})
    } else if("About Me" === e.target.outerText){
      aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if ("Skills" === e.target.outerText){
      skillsRef.current?.scrollIntoView({behavior: 'smooth'});
      console.log(skillsRef.current)
    } else if ("Project" === e.target.outerText) {
      projectRef.current?.scrollIntoView({behavior:'smooth'});
    } else {
      projectRef.current?.scrollIntoView({behavior:'smooth'});
    }
  }

  function moreView() {
    aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const [headerColor,setIsHeaderColor] = useState('white')
  const [headerFontColor,setIsHeaderFontColor] = useState('black')

  function handleScroll (){
    const scrollTop = window.scrollY;
    // 스크롤 이벤트가 시작되면 요값이 변경된다
    if(scrollTop>=825){
      setIsHeaderColor('rgba(0, 0, 0, 0.5)')
      setIsHeaderFontColor('white')
    }	else if (scrollTop < 825){
      setIsHeaderColor('white')
      setIsHeaderFontColor('black')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { capture: true }); // 스크롤 이벤트 등록
    return () => {
      window.removeEventListener('scroll', handleScroll); 		// 스크롤 이벤트 제거
    };
  }, []);


  return (

   <div>
    <HeaderWrap color={headerColor}>
      <HeaderContent>
          <HeaderSubheader fontColor={headerFontColor} onClick={moveTab}>Main</HeaderSubheader>
          <HeaderSubheader fontColor={headerFontColor} onClick={moveTab}>About Me</HeaderSubheader>
          <HeaderSubheader fontColor={headerFontColor} onClick={moveTab}>Skills</HeaderSubheader>
          <HeaderSubheader fontColor={headerFontColor} onClick={moveTab}>Project</HeaderSubheader>
          <HeaderSubheader fontColor={headerFontColor} onClick={moveTab}>Contact Me</HeaderSubheader>
      </HeaderContent>
    </HeaderWrap>
    <MainWrap ref={mainRef}>
            <div className='subhead1'>발전하는 개발자</div>
            <div className='subhead2'>정제원의 포트폴리오</div>
            <MoveButton onClick={moreView}>더 알아보기</MoveButton>
    </MainWrap>
    <Aboutme aboutRef={aboutMeRef}></Aboutme>
    <Skills skillsRef={skillsRef}></Skills>
    <Project projectRef={projectRef}></Project>
    <Bottom></Bottom>

  </div>
  );
}

function Bottom(){
  
  return (
    <div className='bottom'>
      <h1 className='subhead_bottom'>Contact Me</h1>
      <div className='content'>
        <div className='text'>
          <div className='phone'><p>Phone Number</p><div className='phonenumber'>010-4153-6975</div></div>
          <div className='email'><p>Email</p><p className='emailtext'>mmd011375@gmail.com</p></div>
        </div>
        <div onClick={() => {window.open("https://github.com/CingDam")}} className='github_icon'></div>
      </div>
    </div>
  );
}
export default App;
