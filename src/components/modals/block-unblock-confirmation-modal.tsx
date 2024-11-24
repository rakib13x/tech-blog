import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";

interface IProps {
  actionType: "block" | "unblock";
  user: {
    _id: string;
    role: string;
  };
  isPending: boolean;
  handleAction: (userId: string) => void; // Function to handle the action (block or unblock)
}

const BlockUnblockConfirmActionModal = ({
  actionType, // "block" or "unblock"
  user,
  isPending,
  handleAction, // function to either block or unblock the user
}: IProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const confirmAction = () => {
    handleAction(user._id);
    onOpenChange();
  };

  return (
    <>
      <Button
        isDisabled={user.role === "Admin" || isPending}
        onPress={onOpen}
        size="sm"
        radius="sm"
        variant="flat"
        color={actionType === "block" ? "danger" : "success"}
      >
        {actionType === "block" ? "Block" : "Unblock"}
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {actionType === "block" ? "Confirm Block" : "Confirm Unblock"}
              </ModalHeader>
              <ModalBody>
                <p>
                  {actionType === "block"
                    ? "Are you sure you want to block this user?"
                    : "Are you sure you want to unblock this user?"}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={confirmAction}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BlockUnblockConfirmActionModal;
