import { titleFont } from "@/config/fonts";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

function Title({ title, subtitle, className }: Props) {
  return (
    <div className={`${className} mt-3`}>
      <h1
        className={`${titleFont.className} antialiased text-4xl font-semibold `}
      >
        {title}
      </h1>
      {subtitle && (
        <h3 className="text-gray-500 text-xl mb-5">{subtitle}</h3>
      )}
    </div>
  );
}

export { Title };
