import Image from "next/image";
interface Props {
  src: string;
  alt: string;
  badge?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}
export default function ProfileHighlight({
  src,
  alt,
  badge,
  className = "",
  imageClassName = "",
  priority = false,
}: Props) {
  return (
    <figure className={`sketch-profile ${className}`}>
      <div
        className={`relative aspect-square overflow-hidden rounded-3xl ${imageClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 80vw, 320px"
          priority={priority}
          className="object-cover object-top"
        />
      </div>
      {badge ? <figcaption>{badge}</figcaption> : null}
    </figure>
  );
}
