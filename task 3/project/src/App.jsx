import React from "react";
import Card from "./components/Card";

const App = () => {
  const Users = [
    {
      id: 1,
      name: "Noah Thompson",
      role: "Product Designer who focuses on simplicity & usability.",
      avatar: "https://i.pravatar.cc/150?img=1",
      coverImage: "https://picsum.photos/600/300?random=1",
      experience: 78,
      likes: "72.9K",
      posts: 828,
      views: "342.9K",
      socials: {
        instagram: true,
        twitter: true,
        dribbble: true,
      },
    },
    {
      id: 2,
      name: "Emma Wilson",
      role: "UI/UX Designer crafting clean interfaces.",
      avatar: "https://i.pravatar.cc/150?img=2",
      coverImage: "https://picsum.photos/600/300?random=2",
      experience: 65,
      likes: "54.2K",
      posts: 512,
      views: "210.4K",
      socials: {
        instagram: true,
        twitter: false,
        dribbble: true,
      },
    },
    {
      id: 3,
      name: "Liam Carter",
      role: "Frontend Developer & design enthusiast.",
      avatar: "https://i.pravatar.cc/150?img=3",
      coverImage: "https://picsum.photos/600/300?random=3",
      experience: 82,
      likes: "89.1K",
      posts: 1043,
      views: "410.7K",
      socials: {
        instagram: true,
        twitter: true,
        dribbble: false,
      },
    },
    {
      id: 4,
      name: "Olivia Brown",
      role: "Mobile app designer & prototyping expert.",
      avatar: "https://i.pravatar.cc/150?img=4",
      coverImage: "https://picsum.photos/600/300?random=4",
      experience: 70,
      likes: "61.8K",
      posts: 689,
      views: "298.3K",
      socials: {
        instagram: true,
        twitter: true,
        dribbble: true,
      },
    },
    {
      id: 5,
      name: "Ethan Miller",
      role: "Creative designer focused on user flows.",
      avatar: "https://i.pravatar.cc/150?img=5",
      coverImage: "https://picsum.photos/600/300?random=5",
      experience: 58,
      likes: "47.6K",
      posts: 401,
      views: "176.9K",
      socials: {
        instagram: false,
        twitter: true,
        dribbble: true,
      },
    },
    {
      id: 6,
      name: "Sophia Davis",
      role: "Visual designer & brand strategist.",
      avatar: "https://i.pravatar.cc/150?img=6",
      coverImage: "https://picsum.photos/600/300?random=6",
      experience: 90,
      likes: "102.4K",
      posts: 1290,
      views: "520.6K",
      socials: {
        instagram: true,
        twitter: true,
        dribbble: true,
      },
    },
    {
      id: 7,
      name: "James Anderson",
      role: "Design systems & accessibility advocate.",
      avatar: "https://i.pravatar.cc/150?img=7",
      coverImage: "https://picsum.photos/600/300?random=7",
      experience: 75,
      likes: "68.3K",
      posts: 734,
      views: "315.2K",
      socials: {
        instagram: false,
        twitter: true,
        dribbble: false,
      },
    },
    {
      id: 8,
      name: "Ava Martinez",
      role: "Product designer for SaaS platforms.",
      avatar: "https://i.pravatar.cc/150?img=8",
      coverImage: "https://picsum.photos/600/300?random=8",
      experience: 67,
      likes: "59.7K",
      posts: 566,
      views: "248.1K",
      socials: {
        instagram: true,
        twitter: false,
        dribbble: true,
      },
    },
    {
      id: 9,
      name: "William Scott",
      role: "UX researcher & interaction designer.",
      avatar: "https://i.pravatar.cc/150?img=9",
      coverImage: "https://picsum.photos/600/300?random=9",
      experience: 72,
      likes: "63.5K",
      posts: 612,
      views: "289.4K",
      socials: {
        instagram: true,
        twitter: true,
        dribbble: false,
      },
    },
    {
      id: 10,
      name: "Mia Johnson",
      role: "Minimal UI designer & illustrator.",
      avatar: "https://i.pravatar.cc/150?img=10",
      coverImage: "https://picsum.photos/600/300?random=10",
      experience: 85,
      likes: "94.8K",
      posts: 980,
      views: "445.9K",
      socials: {
        instagram: true,
        twitter: true,
        dribbble: true,
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex gap-6 p-10 flex-wrap">
      {Users.map((user) => (
        <Card
          key={user.id}
          user={user}
          role={user.role}
          avatar={user.avatar}
          coverImage={user.coverImage}
          posts={user.posts}
          likes={user.likes}
          views={user.views}
        />
      ))}
    </div>
  );
};

export default App;
