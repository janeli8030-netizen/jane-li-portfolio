export default function SectionImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-black/10 bg-zinc-50">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-auto w-full" />
      {caption ? <figcaption className="px-4 py-3 text-xs text-zinc-500">{caption}</figcaption> : null}
    </figure>
  );
}
