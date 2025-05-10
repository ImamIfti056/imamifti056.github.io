export async function getRepos(username) {
    const selectedRepoNames = [
        "seagull",
        "stock--market-prediction",
        "TeligatiTechWeb2.net",
        "scheduGenius",
        "bicycle-store",
        "techshop",
    ];
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
  if (!res.ok) throw new Error("Failed to fetch repos");

  const allRepos = await res.json();
  return allRepos.filter(repo => selectedRepoNames.includes(repo.name));
}
