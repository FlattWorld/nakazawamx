export default function Checkbox({
  children,
  onChange,
  labelOn = "ON",
  labelOff = "OFF",
  id,
  value,
  name,
}: {
  children?: string;
  onChange: Function;
  labelOn?: any;
  labelOff?: any;
  id: string;
  value: boolean;
  name: string;
}) {
  return (
    <label htmlFor={id} className="flex flex-col">
      <span>{children}</span>
      <button
        id={id}
        onClick={() => onChange({ name, value: !value })}
        className="h-7 w-12 border rounded-full"
      >
        <span
          className={`w-5 h-5 flex items-center justify-center border rounded-full text-[10px] transform transition-transform pointer-events-none ${
            value
              ? "translate-x-6 bg-indigo-600 text-white"
              : "translate-x-0.5 bg-white text-indigo-600"
          }`}
        >
          {value ? labelOn : labelOff}
        </span>
      </button>
    </label>
  );
}
