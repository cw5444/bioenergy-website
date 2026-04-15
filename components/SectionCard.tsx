interface SectionCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;   // 아이콘(emoji 혹은 SVG) 선택적
}

export default function SectionCard({
  title,
  description,
  icon,
}: SectionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
      {icon && <div className="text-4xl mb-3">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}
