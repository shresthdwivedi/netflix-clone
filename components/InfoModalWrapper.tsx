'use client';

import useInfoModal from "@/hooks/useInfoModal";
import InfoModal from "./InfoModel";


const InfoModalWrapper = () => {
    const { isOpen, closeModal } = useInfoModal();

    if (!isOpen) return null;

    return <InfoModal visible={isOpen} onClose={closeModal} />;
};

export default InfoModalWrapper;
