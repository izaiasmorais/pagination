import {
  Article,
  Calendar,
  CurrencyCircleDollar,
  Gear,
  Money,
  SquaresFour,
  TreeStructure,
} from 'phosphor-react';
import { SidebarLink } from './SidebarLink';

export function Sidebar() {
  return (
    <div className="min-h-screen w-[250px] bg-sidebar text-white p-4">
      <h1 className="text-xl font-bold">EZDASH</h1>

      <nav className="mt-8 flex flex-col gap-4">
        <SidebarLink src="/" icon={<SquaresFour size={24} />} name="Dashboard" />
        <SidebarLink src="/playground" icon={<TreeStructure size={24} />} name="Playground" />
        <SidebarLink src="/invoices" icon={<CurrencyCircleDollar size={24} />} name="Contas" />
        <SidebarLink src="/calendar" icon={<Calendar size={24} />} name="Calendário" />
        <SidebarLink src="/forms" icon={<Article size={24} />} name="Formulários" />
        <SidebarLink src="/budget" icon={<Money size={24} />} name="Orçamento" />
        <SidebarLink src="/settings" icon={<Gear size={24} />} name=" Configurações" />
      </nav>
    </div>
  );
}
