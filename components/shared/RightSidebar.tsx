"use client";
import { useEffect, useState } from "react";
import UserCard from "@/components/cards/UserCard";
import { fetchRecommendedUsers } from "@/lib/actions/user.actions"; // You need to implement this function
import User from "@/lib/models/user.model";
import { currentUser } from "@clerk/nextjs";

function RightSidebar() {
  const [recommendedUsers, setRecommendedUsers] = useState<InstanceType<typeof User>[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await fetchRecommendedUsers(); // Fetch recommended users
      setRecommendedUsers(users);
    };

    fetchUsers();
  }, []);

  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-small text-slate-500">Recommended Users to connect</h3>

        {recommendedUsers.map((user) => (
          <div className="pb-5  border ml-2 pl-2 pr-5 mb-2 mt-2 pt-2 rounded-md">
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              imgUrl={user.image}
              personType="User"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col justify-start"></div>A CS 316 Project
    </section>
  );
}

export default RightSidebar;
