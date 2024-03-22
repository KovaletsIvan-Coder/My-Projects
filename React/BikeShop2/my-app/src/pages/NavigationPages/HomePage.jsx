import { useState } from "react";
import PostList from "../../сomponent/PostList/PostList";
import PostFilter from "../../сomponent/PostFilter/PostFilter";
import { usePost } from "../../hook/usePost";

function HomePage() {
  const posts = [
    {
      name: "Trek Top Fuel 9.7",
      description:
        "Top Fuel 9.7 is a quick and nimble full suspension carbon mountain bike that fuses the flat-out speed of a cross country bike with the trail-munching appetite of a trail bike. It lets you fly up climbs, hammer through flat sections, and keep on truckin' on rough descents.",
      id: 1,
      src: "/images/TREK Top Fuel 9.7.jpg",
      alt: "TREK Top Fuel 9.7",
      price: 3000,
    },
    {
      name: "Sender CFR 29",
      description:
        "World Cup proven: whether it’s rough rooty sections, technical rock gardens, huge freeride lines, or rapid downhill tracks, when things get fast and treacherous, the Sender CFR will get you over the line in record time.",
      id: 2,
      src: "/images/Sender CFR 29.png",
      alt: "Sender CFR 29",
      price: 3100,
    },
    {
      name: "Giant Trance X 29",
      description:
        "This hard-charging trail bike adapts to the terrain, giving you confidence and control on all types of singletrack.",
      id: 3,
      src: "/images/Giant Trance X 29 3.jpg",
      alt: "Giant Trance X 29",
      price: 2500,
    },
    {
      name: "Specialized Demo Race 29",
      description:
        "The new Demo 29 comes roaring comes roaring out of the gates with multiple World Cup wins already under its belt. New chassis, new suspension kinematics, new geometry, and, yeah, new wheel size. We’ve hung the Race model with the best gravity kit available. Full gas. Full fast.",
      id: 4,
      src: "/images/Specialized Demo Race 29.jpg",
      alt: "Specialized Demo Race 29",
      price: 2800,
    },
    {
      name: "GT Force Carbon Pro",
      description:
        "Blue, chic and of high quality: the GT Force Carbon Pro 2020. It also comes with the Linkage Tuned Suspenstion (LTS) and an easily adjustable geometry via flip chips. Mountain biking as it should be.",
      id: 5,
      src: "/images/GT Force Carbon Pro.jpg",
      alt: "GT Force Carbon Pro",
      price: 2599,
    },
    {
      name: "YT Jeffsy Core 3",
      description:
        "The Jeffsy Core 3 is the latest version of YT's popular longer travel trail bike. While other brands have gone to extremes with their geometry, this bike's moderate numbers are the primary reason it is such a well-rounded, versatile, and user-friendly performer. With 150mm of front and rear travel and 29-inch wheels, the Jeffsy can handle just about anything on the descents yet retains more maneuverability and agility than most bikes in this travel bracket. ",
      id: 6,
      src: "/images/YT Jeffsy Core 3 Review.png",
      alt: "YT Jeffsy Core 3",
      price: 2900,
    },
  ];

  const [filter, setFilter] = useState({ sort: "", search: "" });
  const serchedAndSortedPosts = usePost(posts, filter.sort, filter.search);

  return (
    <div className="App">
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      <PostList posts={serchedAndSortedPosts}></PostList>
    </div>
  );
}

export default HomePage;
