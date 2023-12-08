"use client";
import { useEffect, useState } from "react";
import UserCard from "@/components/cards/UserCard";
import { fetchRecommendedUsers } from "@/lib/actions/user.actions"; // You need to implement this function
import User from "@/lib/models/user.model";
import { currentUser } from "@clerk/nextjs";

// type User = {
//   id: string;
//   name: string;
//   username: string;
//   image: string;
// };

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
          <div className="pb-3">
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              imgUrl={user.image}
              personType="User"
              buttonText="See Profile" // Add a button with "Connect" text
            />
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col justify-start"></div>A CS 316 Project
    </section>
  );
}

export default RightSidebar;

// function RightSidebar() {
//   return (
//     <section className="custom-scrollbar rightsidebar">
//       <div className="flex flex-1 flex-col justify-start">
//         <h3 className="text-heading4-small text-slate-500">Recommended Communities</h3>
//       </div>
//       <div className="flex flex-1 flex-col justify-start">
//         <h3 className="text-heading4-small text-slate-500">Recommended Users</h3>
//       </div>
//       RightSidebar
//     </section>
//   );
// }

// export default RightSidebar;
