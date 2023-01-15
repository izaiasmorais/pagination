import { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface ILayout {
  children?: ReactNode;
}

export function Layout({ children }: ILayout) {
  return (
    <div className="flex h-full w-full bg-[#212B36]">
      <Sidebar />
      <div className="flex flex-col px-4 pt-4 pb-16 w-full rounded-tl-3xl bg-[#FDFDFD]">
        <Header />
        <div
          className="flex flex-col w-full my-0 mx-auto max-w-[1500px]
				mt-8"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
