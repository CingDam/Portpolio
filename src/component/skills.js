import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";
import { forwardRef, useState } from 'react';
import IconJS from '../icon/skills/javavscript.png';
import IconHtml from '../icon/skills/html.png';
import IconJquery from '../icon/skills/jquery.png';
import IconReact from '../icon/skills/react.png';
import IconSpring from '../icon/skills/spring.png';
import IconCss from '../icon/skills/css.png';
import IconNode from '../icon/skills/nodejs.png';
import IconOracle from '../icon/skills/oracle.png';
import IconMaria from '../icon/skills/mariadb.png';
import React from 'react';

/*컴포넌트 */
const Subhead1 = styled(motion.div)`
    width : 150px;
    display : inline-block;
    font-size: ${props => (props.value === 'Publishing' ? '32px' : '24px')};
    font-weight: ${props => (props.value === 'Publishing' ? '700' : '500')};
    color: black;
    margin : 40px 0 40px 50px;
    padding : 5px 0;
    text-decoration: ${props => (props.value === 'Publishing' ? 'underline' : '')};
    text-decoration-thickness : 3px;
    text-underline-offset : 20px;
  `;
  const Subhead2 = styled(motion.div)`
    width : 150px;
    display : inline-block;
    font-size: ${props => (props.value === 'Front-end' ? '32px' : '24px')};
    font-weight: ${props => (props.value === 'Front-end' ? '700' : '500')};
    color: black;
    margin : 40px 0 40px 50px;
    padding : 5px 0;
    text-decoration: ${props => (props.value === 'Front-end' ? 'underline' : '')};
    text-decoration-thickness : 3px;
    text-underline-offset : 20px;
  `;
  const Subhead3 = styled(motion.div)`
    width : 150px;
    display : inline-block;
    font-size: ${props => (props.value === 'Back-end' ? '32px' : '24px')};
    font-weight: ${props => (props.value === 'Back-end' ? '700' : '500')};
    color: black;
    margin : 40px 0 40px 50px;
    padding : 5px 0;
    text-decoration: ${props => (props.value === 'Back-end' ? 'underline' : '')};
    text-decoration-thickness : 3px;
    text-underline-offset : 20px;
  `;
  const Subhead4 = styled(motion.div)`
    width : 150px;
    display : inline-block;
    font-size: ${props => (props.value === 'DB' ? '32px' : '24px')};
    font-weight: ${props => (props.value === 'DB' ? '700' : '500')};
    color: black;
    margin : 40px 0 40px 50px;
    padding : 5px 0;
    text-decoration: ${props => (props.value === 'DB' ? 'underline' : '')};
    text-decoration-thickness : 3px;
    text-underline-offset : 20px;
  `;

  const IconPub = styled.div`
    opacity: ${props => (props.value === 'Publishing' ? '1' : '0')};
  `
  const IconFront = styled.div`
    opacity: ${props => (props.value === 'Front-end' ? '1' : '0')};
`
  const IconBack = styled.div`
    opacity: ${props => (props.value === 'Back-end' ? '1' : '0')};
  `
  const IconDb = styled.div`
    opacity: ${props => (props.value === 'DB' ? '1' : '0')};
  `
  const SubheadContainer = styled(motion.div)` 
    margin : 0 auto;`
  const SkillContainer = styled(motion.div)`
    margin : 100px auto;
  `;

  const IconContent = styled(motion.img)`
  width : ${props => props.width || '205px'};
  height : ${props => props.height || 'auto'};
  margin : ${props => props.margin};
  `;

  const SkillsWarp = styled.div`
    text-align: center;
  `
/*컴포넌트 */

const Skills = forwardRef(({skillsRef},ref) => {

  const subheadHover = {
    scale: 1.2,
  }

  const [currentTap, setCurrentTap] = useState('Publishing')

  const changeUnderLine = e => {
    setCurrentTap(e.target.outerText);
  }
  
  // 서브헤드 클릭시 보여줄 내용
  function IconComponent(currentTap) {
    switch (currentTap) {
      case 'Publishing':
        return (<IconPub value={currentTap}>
          <IconContent initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{
            scale: 1.2
          }}
            src={IconJS}></IconContent>
          <IconContent initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{
            scale: 1.2
          }} src={IconHtml} margin='0 200px;'></IconContent>
          <IconContent initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{
            scale: 1.2
          }} src={IconCss}></IconContent>
        </IconPub>)
      case 'Front-end':
        return (<IconFront value={currentTap}>
          <IconContent src={IconJS} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            whileHover={{
              scale: 1.2
            }}></IconContent>
          <IconContent initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{
            scale: 1.2
          }} src={IconJquery} width='600px' height='150px' margin='30px 100px;'></IconContent>
          <IconContent initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{
            scale: 1.2
          }} src={IconReact}></IconContent>
        </IconFront>)
      case 'Back-end':
        return (<IconBack value={currentTap}>
          <IconContent initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{
            scale: 1.2
          }} src={IconSpring} width='500px'></IconContent>
          <IconContent initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{
            scale: 1.2
          }} src={IconNode} width='500px' margin='0 100px;'></IconContent>
        </IconBack>)
      case 'DB':
        return (
          <IconDb value={currentTap}>
            <IconContent initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{
              scale: 1.2
            }} src={IconOracle} width='370px' height='170px'></IconContent>
            <IconContent initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{
              scale: 1.2
            }} src={IconMaria} width='250px' height='200px' margin='0 0 0 200px  ;'></IconContent>
          </IconDb>
        )
    }
    // 서브헤드 클릭시 보여줄 내용
  }
  return (
    <SkillsWarp ref={skillsRef} className='skillbox'>
      <div className='skills'>
      <h1>Skills</h1>
        <SubheadContainer initial="hidden" animate="visible">
          <Subhead1 whileHover={currentTap !== 'Publishing' ? subheadHover : ''} value={currentTap} onClick={changeUnderLine}>Publishing</Subhead1>
          <Subhead2 whileHover={currentTap !== 'Front-end' ? subheadHover : ''} value={currentTap} onClick={changeUnderLine}>Front-end</Subhead2>
          <Subhead3 whileHover={currentTap !== 'Back-end' ? subheadHover : ''} value={currentTap} onClick={changeUnderLine}>Back-end</Subhead3>
          <Subhead4 whileHover={currentTap !== 'DB' ? subheadHover : ''} value={currentTap} onClick={changeUnderLine}>DB</Subhead4>
          <SkillContainer>
          {IconComponent(currentTap)}
          </SkillContainer>
        </SubheadContainer>

      </div>
    </SkillsWarp>
  )
})

export { Skills };