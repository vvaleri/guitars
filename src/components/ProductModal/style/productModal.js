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

  @media (max-width: 1023px) {
    padding: 30px;
  }

  @media (max-width: 767px) {
    padding: 0;
  }
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

  @media (max-width: 767px) {
    flex-direction: column;
    min-width: 100%;
  }
`;

const Img = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  max-width: 400px;

  @media (max-width: 1023px) {
    flex: 1 0 270px;
  }

  @media (max-width: 767px) {
    align-self: center;
    flex: 1 0 auto;
    width: 250px;
    height: 250px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 30px 40px;
  background-color: #e7e7e7;

  @media (max-width: 767px) {
    padding: 20px;
    max-width: 100%;
  }
`;

const Status = styled.span`
  margin-bottom: 15px;
  color: #0099dd;
  font-size: 21px;

  @media (max-width: 767px) {
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

const Title = styled.p`
  margin-bottom: 15px;
  font-size: 30px;

  @media (max-width: 767px) {
    margin-bottom: 10px;
    font-size: 18px;
  }
`;

const Text = styled.p`
  margin-bottom: 15px;
  font-family: 'Gibson';
  font-size: 18px;
  line-height: 1.4;

  @media (max-width: 767px) {
    font-size: 16px;
  }
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

const CloseMobile = styled.button`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    padding: 10px;
    text-transform: uppercase;
    background-color: #0099dd;
    border: none;
    color: #fff;
  }
`;

export { Modal,
  Wrap,
  Overlay,
  Container,
  CloseButton,
  Img,
  Content,
  Status,
  Title,
  Text,
  CloseMobile };
