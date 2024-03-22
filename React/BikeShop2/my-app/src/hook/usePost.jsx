import { useMemo } from "react";
export const useSortedPosts = (posts, sort) => {
  const SortedPosts = useMemo(() => {
    if (sort) {
      return sort === "priceHigher"
        ? [...posts].sort((a, b) => b.price - a.price)
        : [...posts].sort((a, b) => a.price - b.price);
    }
    return posts;
  }, [sort, posts]);

  return SortedPosts;
};

export const usePost = (posts, sort, search) => {
  const SortedPosts = useSortedPosts(posts, sort);

  const serchedAndSortedPosts = useMemo(() => {
    return SortedPosts.filter((post) =>
      post.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [SortedPosts, search]);

  return serchedAndSortedPosts;
};
