import React, { useState } from "react";

const useHome = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return {
        openModal,
        closeModal,
        isModalOpen,
    }
}

export default useHome