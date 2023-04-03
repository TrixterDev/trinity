import styles from "./style.module.scss";

const Video = ({ src }) => {
  return (
    src && (
      <video
        className={styles.video}
        width={476}
        height={740}
        controls
          autoPlay
      >
        <source src={src} type="video/mp4" />
      </video>
    )
  );
};

export default Video;
