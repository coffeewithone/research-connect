"use client";
import { UserProfile, currentUser } from "@clerk/nextjs";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  type?: string;
}

async function ProfileHeader({ accountId, authUserId, name, username, imgUrl, bio, type }: Props) {
  const [editMode, setEditMode] = useState(false);
  const [editedBio, setEditedBio] = useState(bio);

  const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedBio(event.target.value);
  };

  const handleSaveBio = () => {
    setEditMode(false);
  };

  return (
    <div className="flex w-full flex-col justify-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 pb-10 mb-10">
          <div className="relative h-20 w-20 object-cover">
            <Image
              src={imgUrl}
              alt="logo"
              fill
              className="rounded-full object-cover shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-left text-heading3-bold ">{name}</h2>
            <p className="text-base-medium text-gray-1">@{username}</p>
            <p className="mt-6 max-w-lg text-base-regular">{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
