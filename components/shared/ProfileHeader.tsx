"use client";

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
  onUpdateBio: (newBio: string) => void;
}

function ProfileHeader({ accountId, authUserId, name, username, imgUrl, bio, type, onUpdateBio }: Props) {
  const [editMode, setEditMode] = useState(false);
  const [editedBio, setEditedBio] = useState(bio);

  const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedBio(event.target.value);
  };

  const handleSaveBio = () => {
    onUpdateBio(editedBio);
    setEditMode(false);
  };

  return (
    <div className="flex w-full flex-col justify-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
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
          </div>
        </div>

        <button
          onClick={() => setEditMode(!editMode)}
          className="flex cursor-pointer rounded-lg bg-slate-800 px-4 py-2"
        >
          <p className="text-light-2 max-sm:hidden">Edit Bio</p>
        </button>
        {/* {accountId === authUserId && type !== "Community" && (
          <div className="flex gap-3">
            <button
              onClick={() => setEditMode(!editMode)}
              className="flex cursor-pointer rounded-lg bg-slate-800 px-4 py-2"
            >
              <p className="text-light-2 max-sm:hidden">Edit Bio</p>
            </button>
          </div>
        )} */}
      </div>

      {editMode ? (
        <div className="mt-6">
          <textarea
            className="w-full rounded-lg bg-slate-100 p-4 text-base-regular"
            value={editedBio}
            onChange={handleBioChange}
          />
          <button
            onClick={handleSaveBio}
            className="mt-2 rounded-lg bg-slate-800 px-4 py-2 text-white"
          >
            Save
          </button>
        </div>
      ) : (
        <p className="mt-6 max-w-lg text-base-regular">{bio}</p>
      )}

      <div className="mt-12 h-0.5 w-full bg-dark-3" />
    </div>
  );
}

export default ProfileHeader;
