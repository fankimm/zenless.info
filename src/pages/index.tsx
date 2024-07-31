import Character from '@/components/character';

export interface ICharacter {
  name: string;
  src: string;
  alt: string;
}
const characters = [
  {
    name: '엘렌',
    src: '/assets/role_square_avatar_1191.png',
    alt: 'role_square_avatar_1191',
  },
  {
    name: '콜레다',
    src: '/assets/role_square_avatar_1101.png',
    alt: 'role_square_avatar_1101',
  },
];

export default function Home() {
  return (
    <div>
      <div>한글 폰트</div>
      <div>English Font</div>
      <div>내 에이전트</div>
      <div>엘리트 로프꾼</div>
      <div className="flex gap-4">
        {characters.map((character) => {
          return <Character key={character.name} characterInfo={character} />;
        })}
      </div>
    </div>
  );
}
