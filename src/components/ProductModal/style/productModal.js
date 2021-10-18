import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

const Modal = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 60px 40px;

`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  min-width: 400px;
  background-color: #fff;
`;

const Img = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  max-width: 400px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 30px 40px;
  background-color: #e7e7e7;
`;

const Status = styled.span`
  margin-bottom: 15px;
  color: #0099dd;
  font-size: 21px;
`;

const Title = styled.p`
  margin-bottom: 15px;
  font-size: 30px;

`;

const Text = styled.p`
  margin-bottom: 15px;
  font-family: 'Gibson';
  font-size: 18px;
  line-height: 1.4;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 5px;
  font-size: 20px;
  border: none;
  background-color: transparent;
  transition: color 0.3s;

  @media (hover: hover), screen and (min-width: 0\0) {
    :hover,
    :focus {
      color: #0099dd;
    }
  }
`;

export { Modal, Wrap, Overlay, Container, CloseButton, Img, Content, Status, Title, Text };
