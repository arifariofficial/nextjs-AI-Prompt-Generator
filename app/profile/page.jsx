"use client";
import Profile from "@components/Profile";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const MyProfile = () => {
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    if (session?.user.id) {
      fetchPost();
    }
  }, [session?.user.id]);

  const handleEdit = async (arg) => {
    return;
  };

  const handleDelete = async (arg) => {
    return;
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized page"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
