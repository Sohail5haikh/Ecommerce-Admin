"use client"

import { Modal } from "@/components/ui/Modal";

export default function SetUpPage() {
  return (
    <div className="p-4">
      <Modal title="Test" description="test" isOpen onClose={()=>{}}>
        children
      </Modal>
    </div>
  );
}
