import { Button, Center, Modal } from "native-base";

export default function SnackModal({showModal, setShowModal, modalName, imageUrl}: any) {
    
    return (
    <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal({state: false, modalName: "", imageUrl: ""})} size="lg">
        <Modal.Content w="100%" h="100%">
          <Modal.CloseButton />
          <Modal.Header>{modalName}</Modal.Header>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal({state: false, modalName: "", imageUrl: ""});
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setShowModal({state: false, modalName: "", imageUrl: ""});
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
    );
}