import NextImage from "next/image";

type ImageProps = {
  alt: string;
  fill?: boolean;
  height?: number;
  priority?: boolean;
  src: any;
  width?: number;
};

export default function Image({ alt, fill = false, height, priority = false, src, width }: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      height={height}
      priority={priority}
      width={width}
      style={fill ? { width: "100%", height: "auto" } : undefined}
    />
  );
}
