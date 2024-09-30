import NextImage from "next/image";

type ImageProps = {
  src: any;
  alt: string;
  width?: string;
  height?: string;
};

export default function Image({ src, alt, width = "100%", height = "auto" }: ImageProps) {
  return <NextImage src={src} alt={alt} style={{ width, height }} />;
}
