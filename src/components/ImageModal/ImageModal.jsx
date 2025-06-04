import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, image, modalRef }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen || !image) return null;

  const {
    urls,
    alt_description,
    user,
    likes,
    description,
    links
  } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      shouldCloseOnOverlayClick={true}
    >
      <div ref={modalRef} tabIndex="-1" className={styles.modalInner}>
        <img
          src={urls.regular}
          alt={alt_description}
          className={styles.image}
        />
        <div className={styles.content}>
          <div className={styles.authorInfo}>
            <img
              src={user.profile_image.medium}
              alt={user.name}
              className={styles.avatar}
            />
            <div>
              <a
                href={user.links.html}
                target="_blank"
                rel="noreferrer"
                className={styles.name}
              >
                {user.name}
              </a>
              <div className={styles.meta}>
                @{user.username}
              </div>
            </div>
          </div>

          <h2 className={styles.title}>
            {description || alt_description || 'No description'}
          </h2>

          <p className={styles.likes}>
            <strong>Likes:</strong> ❤️ {likes}
          </p>

          <a
            href={links.download}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <button className={styles.downloadBtn}>Download</button>
          </a>
        </div>
      </div>
    </Modal>
  );
}
