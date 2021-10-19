import { AnimatePresence } from 'framer-motion';
import { Modal, Overlay, Wrap, Container, CloseButton, Img, Content, Status, Title, Text, CloseMobile } from './style/productModal';

export const ProductModal = ({ product, setModal, modal, allowScroll }) => {
  const container = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0
    }
  };

  const closeModal = () => {
    setModal(false);
    allowScroll();
  };

  return (
    <AnimatePresence>
      {
        modal && (
          <Modal
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Wrap>
              <Overlay onClick={closeModal} />
              <Container>
                <Img><img src={product.img} alt={product.alt} /></Img>
                <Content>
                  <Status>{product.status}</Status>
                  <Title>{product.name}</Title>
                  <Text>{product.text}</Text>
                  <CloseMobile onClick={closeModal}>Close</CloseMobile>
                </Content>
                <CloseButton onClick={closeModal}>&#10006;</CloseButton>
              </Container>
            </Wrap>
          </Modal>
        )
      }
    </AnimatePresence>
  );
};
