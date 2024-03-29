export const userData = async (userName: string) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);

  const data = await response.json();

  const userInfo = {
    userName: data.login,
    img: data.avatar_url,
    bio: data.bio,
    repos: data.public_repos,
    followers: data.followers,
    following: data.following,
    date: data.created_at,
    location: data.location,
    twitter: data.twitter_username,
    company: data.company,
    blog: data.blog,
  };

  return userInfo;
};
