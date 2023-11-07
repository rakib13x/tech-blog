"use client";

import { WriteBlogModal } from "../modals";

interface IProps {}

const WritePostButton: React.FC<IProps> = () => {
  return (
    <>
      {" "}
      <WriteBlogModal />
    </>
  );
};

export default WritePostButton;
