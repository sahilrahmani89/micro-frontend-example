import React, { useState } from "react";

const useHome = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLinkModal,setisLinkModal] = useState(false)
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openLinkModal = () => {
        setisLinkModal(true);
    };

    const closeLinkModal = () => {
        setisLinkModal(false);
    };
    return {
        openModal,
        closeModal,
        isModalOpen,
        isLinkModal,
        setisLinkModal,
        openLinkModal,
        closeLinkModal
    }
}

export default useHome