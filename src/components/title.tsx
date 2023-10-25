export default function Title({
  label,
  labelC,
  hideSide = false,
  className,
  textCenter = false,
}: {
  label: string;
  labelC?: string;
  hideSide?: boolean;
  className?: string;
  textCenter?: boolean;
}) {
  return (
    <div
      className={
        "container mx-auto mt-14 flex gap-5 max-1-md:px-4 " + className
      }
    >
      {hideSide || <div className="h-14 w-3 max-1-md:h-10 bg-primary" />}
      <div
        className={
          "flex items-center gap-5 " + (textCenter && "justify-center")
        }
      >
        <h1
          className={
            "text-4xl font-semibold text-secondary max-1-md:text-3xl max-1-sm:hidden block " +
            (textCenter && "text-center")
          }
        >
          {label}
        </h1>
        <h1
          className={
            "ml-[-10px] text-4xl font-semibold text-primary  max-1-md:text-3xl max-1-sm:hidden block " +
            (textCenter && "text-center")
          }
        >
          {labelC}
        </h1>
        <h1
          className={
            "text-4xl font-semibold text-secondary max-1-md:text-3xl max-1-sm:block hidden " +
            (textCenter && "text-center")
          }
        >
          {label + " " + (labelC ?? "")}
        </h1>
      </div>
    </div>
  );
}
