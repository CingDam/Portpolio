import React, { forwardRef } from 'react';

import styled, { keyframes } from 'styled-components';
import { delay, motion } from "framer-motion";
import { useState,useEffect,useRef } from 'react';
import Helpus from '../thumbnail/mainpage_helpus.png';
import TripPlanner from '../thumbnail/mainpage_tripplanner.png';
import { BsArrowRight } from "react-icons/bs";

import {Modal} from './modal.js'

/*컴포넌트 */
const ProjectContainer = styled.div`
`
const ProjectBox = styled(motion.div)`
margin : auto;
width:max-content;
`
const Content = styled(motion.div)`
box-shadow : 0px 0px 15px;
width : 300px; 
display : inline-block;
margin : ${props => props.margin || '0px'}
`
const ProjectSubhead = styled.div`
margin : 0 0 0 10px;
font-size : 24px;
font-weight : 500;
`
const Thumbnail = styled(motion.img)`
width : 280px;
margin : 10px 10px;

`
const ModalButton = styled.div`
margin : 10px 10px;
font-size : 16px;
&&:hover{
    cursor: pointer;
    font-weight : 700;
}
`
const ProjectWrap = styled.div`
    margin: 80px 0;
`
/*컴포넌트 */

const Project = forwardRef(({projectRef},ref) => {

    const [openModal,setOpenModal] = useState(false);
    const [projectName,setProjectName] = useState('');

    const tripPlanner = () => {
        setOpenModal(true);
        setProjectName('TripPlanner');
    }

    const helpUs = () => {
        setOpenModal(true);
        setProjectName('Helpus');
    }
    const projectTarget = useRef();

    const closeModal = (e) => {
        if(projectTarget.current === e.target) setOpenModal(false)
        // ref 값이랑 현재 타겟이랑 같으면 모달창 닫기 -> 바깥영역 클릭 시 닫기용
        if('closeModal' === e.target.className) setOpenModal(false)
        // 닫기 버튼 누를 때 모달 닫기 코드
    }

    return (
        <ProjectWrap ref={projectRef}>
            <h1>Project</h1>
            <ProjectContainer>
                <ProjectBox>
                    <Content whileHover={{scale : 1.2,}}>
                        <Thumbnail src={TripPlanner} ></Thumbnail>
                        <ProjectSubhead>TripPlanner</ProjectSubhead>
                        <div className='text'>개인 프로젝트</div>
                        <ModalButton onClick={tripPlanner}>자세히 보기 <BsArrowRight/></ModalButton>
                    </Content>
                    <Content margin='0 0 0 50px;' whileHover={{scale : 1.2,}}>
                        <Thumbnail src={Helpus}></Thumbnail>
                        <ProjectSubhead>Helpus</ProjectSubhead>
                        <div className='text'>팀 프로젝트</div>
                        <ModalButton onClick={helpUs}>자세히 보기 <BsArrowRight/></ModalButton>
                    </Content>
                </ProjectBox>
            </ProjectContainer>
            
            {openModal && <Modal name={projectName} projectTarget={projectTarget} ref={projectTarget} closeModal={closeModal}/> }
        
        </ProjectWrap>
     
    )
})

export {Project};