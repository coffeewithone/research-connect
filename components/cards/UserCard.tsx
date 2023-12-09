"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
}

function UserCard({ id, name, username, imgUrl, personType }: Props) {
  const router = useRouter();

  const isCommunity = personType === "Community";

  return (
    <button
      onClick={() => {
        router.push(`/profile/${id}`);
      }}
    >
      <div className="flex">
        <article className="user-card">
          <div className="user-card_avatar">
            <div className="relative h-12 w-12">
              <Image
                src={imgUrl}
                alt="user_logo"
                fill
                className="rounded-full object-cover"
              />
            </div>

            <div className="flex-1 text-ellipsis">
              <h4 className="text-base-semibold">{name}</h4>
              <p className="text-small-medium ">@{username}</p>
            </div>
          </div>

          {/* <Button
          onClick={() => {
            if (isCommunity) {
              router.push(`/communities/${id}`);
            } else {
              router.push(`/profile/${id}`);
            }
          }}
        >

        </Button> */}
        </article>
      </div>
    </button>
  );
}

export default UserCard;
