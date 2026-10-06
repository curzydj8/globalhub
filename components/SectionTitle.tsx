import Link from 'next/link';

export default function SectionTitle({ title, href }: { title: string; href?: string }) {
  return (
    <div className="flex items-center justify-between mt-10 mb-4">
      <h2 className="text-2xl font-extrabold">{title}</h2>
      {href && (
        <Link href={href} className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
          查看全部 →
        </Link>
      )}
    </div>
  );
}
