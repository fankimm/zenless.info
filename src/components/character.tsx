import { ICharacter } from '@/pages';

const Character = ({ characterInfo }: { characterInfo: ICharacter }) => {
  return (
    <div className="bg-black hover:bg-[#ffde00] rounded-lg w-[94px] overflow-hidden p-1 hover:text-black transition-all">
      <img
        width={94}
        height={97}
        src={characterInfo.src}
        alt={characterInfo.alt}
      />
      <div className="zzz">{characterInfo.name}</div>
    </div>
  );
};

export default Character;
