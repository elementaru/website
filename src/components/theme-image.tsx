import styles from "./theme-image.module.css";
import Image from "next/image";
import { clsx } from "clsx";

type Props = {
  srcLight: string;
  srcDark: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

function ThemeImage(props: Props) {
  const { srcLight, srcDark, alt, className, width, height, priority } = props;

  return (
    <>
      <Image
        src={srcLight}
        className={clsx([className, styles.imgLight])}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
      />
      <Image
        src={srcDark}
        className={clsx([className, styles.imgDark])}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
      />
    </>
  );
}

export default ThemeImage;
