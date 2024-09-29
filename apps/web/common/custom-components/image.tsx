import NextImage from "next/image";

type ImageProps = {
  src: any;
  alt: string;
  width?: string;
  height?: string;
};

const Image = ({ src, alt, width = "100%", height = "auto" }: ImageProps) => (
  <NextImage src={src} alt={alt} style={{ width, height }} />
);

export default Image;
