import Avatar, { AvatarData } from './Avatar';

export interface AvatarListProps {
  avatars: AvatarData[];
  className?: string;
}

export default function AvatarList({
  avatars: avatars,
  className = '',
}: AvatarListProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {avatars.map(avatar => (
        <Avatar
          key={avatar.imageSrc}
          imageSrc={avatar.imageSrc}
          name={avatar.name}
        ></Avatar>
      ))}
    </div>
  );
}
