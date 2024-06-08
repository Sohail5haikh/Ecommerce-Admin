"use client"

import { Modal } from "@/components/ui/Modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

export default function SetUpPage() {
  const onOpen = useStoreModal((state)=> state.onOpen)
  const isOpen = useStoreModal((state)=> state.isOpen)

  useEffect(()=>{
    if(!isOpen){
      onOpen()
    }
  },[isOpen,onOpen])
  return null
}