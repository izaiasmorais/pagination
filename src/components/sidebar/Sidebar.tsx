import { Article, TreeStructure } from "phosphor-react";
import { SidebarLink } from "./SidebarLink";

export function Sidebar() {
	return (
		<div className="min-h-screen w-[250px] bg-sidebar text-white p-4">
			<h1 className="text-xl font-bold">EZDASH</h1>

			<nav className="mt-8 flex flex-col gap-4">
				<SidebarLink
					src="/"
					icon={<TreeStructure size={24} />}
					name="Playground"
				/>

				<SidebarLink
					src="/forms"
					icon={<Article size={24} />}
					name="Formulários"
				/>
			</nav>
		</div>
	);
}
