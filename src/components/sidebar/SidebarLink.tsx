import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface ISiderbarLink {
  icon: ReactNode;
  src: string;
  name: string;
}

export function SidebarLink({ icon, name, src }: ISiderbarLink) {
  const { asPath } = useRouter();

  const active = asPath.endsWith(src) ? 'bg-[#7F3DFF] hover:bg-[#7F3DFF] text-gray-50' : '';

  return (
    <Link
      href={src}
      style={{
        background: asPath.endsWith(src) ? '#7F3DFF' : '',
        color: asPath.endsWith(src) ? 'white' : '',
      }}
      className={`flex text-text_sidebar items-center rounded-md py-2 px-2 font-semibold
		gap-2 hover:bg-[#454F5B] ${active}`}
    >
      {icon}
      {name}
    </Link>
  );
}
