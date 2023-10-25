export default function Paragraph({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <p
      className={
        "text-2xl max-1-md:text-lg my-5 text-grey font-light leading-normal " +
        className
      }
    >
      {text}
    </p>
  );
}
