import { Image, Modal } from "native-base";
import Pinchable from 'react-native-pinchable';
import { Dimensions } from "react-native";

export default function SnackModal({showModal, setShowModal, modalName, imageUrl}: any) {
    
  const dimensions = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  }

    return (
      <Modal isOpen={showModal} onClose={() => setShowModal({state: false, modalName: "", imageUrl: "https://media.graphassets.com/9Xo4yzB4QBe4Va872Tw5"})}>
        <Modal.Content w="100%" h="100%">
          <Modal.CloseButton />
          <Modal.Body>
            <Pinchable>
              <Image w={dimensions.width * 1} h={dimensions.height * 0.4} source={{uri: imageUrl}} alt={modalName} fallbackSource={{uri: 'https://media.graphassets.com/9Xo4yzB4QBe4Va872Tw5'}}/>
            </Pinchable>
          </Modal.Body>
        </Modal.Content>
      </Modal>

    );
}