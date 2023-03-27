export default function Container({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <div className={`w-full flex items-start justify-center ${className}`}>
      <div className="w-full max-w-7xl flex items-start flex-col px-4 md:px-8 xl:px-0">
        {children}
      </div>
    </div>
  );
}
