import { MagnifyingGlass } from 'phosphor-react';

export function Header() {
  return (
    <header
      className="bg-white w-[1500px] mx-auto h-[64px]
		shadow-sm rounded-2xl p-4 flex justify-between items-center"
    >
      <div
        className="flex items-center gap-2 bg-background
			rounded-2xl pr-4"
      >
        <input
          type="text"
          placeholder="Pesquisar"
          className="outline-none	bg-background p-2 rounded-2xl pl-4"
        />
        <div>
          <MagnifyingGlass size={20} />
        </div>
      </div>

      <div></div>
    </header>
  );
}
