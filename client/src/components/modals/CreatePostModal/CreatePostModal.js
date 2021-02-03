import React from "react";
import { useDispatch } from "react-redux";
import "./CreatePostModal.scss";

import { hideCurrentModalAction } from "../../../store/actions/modalActions";

import FormTextArea from "../../forms/FormTextArea/FormTextArea";
import FormInputGroup from "../../forms/FormInputGroup/FormInputGroup";
import Button from "../../shared/Button/Button";

import Modal from "../Modal/Modal";
import ModalClose from "../ModalClose/ModalClose";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalContent from "../ModalContent/ModalContent";
import ModalFooter from "../ModalFooter/ModalFooter";

function CreatePostModal(props) {
  const textAreaRef = React.useRef(null);
  const dispatch = useDispatch();
  const closeCreatePostModal = () => dispatch(hideCurrentModalAction());

  React.useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  return (
    <Modal>
      <ModalClose closeModal={closeCreatePostModal} />
      <ModalContent>
        <ModalHeader
          heading="Create A Post!"
          subheading="Everyone can see and interact with your posts"
        />
        <div className="CreatePostModal">
          <form className="CreatePostModal__form">
            <div className="CreatePostModal__form-line CreatePostModal__form-line--textarea">
              <FormTextArea ref={textAreaRef} placeholder="Tell us all what you're thinking..." />
            </div>
            <div className="CreatePostModal__form-line CreatePostModal__form-line--upload"></div>
            <div className="CreatePostModal__form-line CreatePostModal__form-line--submit">
              <Button color="indigo" width="full">
                Create Post
              </Button>
            </div>
          </form>
        </div>
      </ModalContent>
    </Modal>
  );
}

export default CreatePostModal;
