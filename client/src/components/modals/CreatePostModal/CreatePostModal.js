import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./CreatePostModal.scss";

import { hideCurrentModalAction } from "../../../store/actions/modalActions";
import { createNewPostAction } from "../../../store/actions/createPostActions";

import FormTextArea from "../../forms/FormTextArea/FormTextArea";
import Button from "../../shared/Button/Button";
import UserInfoGroup from "../../shared/UserInfoGroup/UserInfoGroup";

import Modal from "../Modal/Modal";
import ModalClose from "../ModalClose/ModalClose";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalContent from "../ModalContent/ModalContent";
import ModalFooter from "../ModalFooter/ModalFooter";

function CreatePostModal(props) {
  const textAreaRef = React.useRef(null);
  const [state, setState] = React.useState({
    text: "",
    image: "",
  });
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { createPostLoading, createPostError } = useSelector((state) => state.createPost);
  const closeCreatePostModal = () => dispatch(hideCurrentModalAction());

  React.useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.text) {
      dispatch(createNewPostAction(state));
    }
  };

  return (
    <Modal>
      <ModalClose closeModal={closeCreatePostModal} />
      <ModalContent>
        <ModalHeader heading="Create Post!" subheading="Share your thoughts with everyone..." />
        <div className="CreatePostModal__author">
          <UserInfoGroup user={user} />
        </div>
        <div className="CreatePostModal">
          <form onSubmit={handleSubmit} className="CreatePostModal__form">
            <div className="CreatePostModal__form-line">
              <FormTextArea
                ref={textAreaRef}
                name="text"
                onChange={handleChange}
                value={state.text}
                placeholder="Tell us all what you're thinking..."
              />
            </div>
            {/* <div className="CreatePostModal__form-line CreatePostModal__form-line--upload"></div> */}
            <div className="CreatePostModal__form-line">
              <Button type="submit" color="indigo" isLoading={createPostLoading} width="full">
                Create Post
              </Button>
            </div>
          </form>
        </div>
      </ModalContent>
      <ModalFooter displayCopy="Posts are public! Everyone can view and interact with your posts." />
    </Modal>
  );
}

export default CreatePostModal;
