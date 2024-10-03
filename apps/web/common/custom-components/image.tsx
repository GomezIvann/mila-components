import NextImage from "next/image";

type ImageProps = {
  alt: string;
  fill?: boolean;
  height?: number;
  src: any;
  width?: number;
};

export default function Image({ alt, fill = false, height, src, width }: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      height={height}
      width={width}
      style={fill ? { width: "100%", height: "auto" } : undefined}
    />
  );
}
