export default function TwoCol({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-12">
      <div className="md:col-span-5">{left}</div>
      <div className="md:col-span-7">{right}</div>
    </div>
  );
}
