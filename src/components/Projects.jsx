import { Clock, ExternalLink, GitFork, Star, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import { getRepos } from "../services/getRepos";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  setLoading(true);
  getRepos("ImamIfti056")
    .then((data) => {
      setRepos(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
    });
}, []);

  return (
    <section id="projects" className="page-section">
      <div className="dossier-title-row">
        <div>
          <p className="page-kicker">Selected work</p>
          <h1 className="section-heading">Projects</h1>
        </div>
        <a href="https://github.com/ImamIfti056?tab=repositories" target="_blank" rel="noreferrer" className="dossier-link">
          View GitHub
          <ExternalLink size={17} />
        </a>
      </div>
      <p className="page-lede">
        A live view of repositories and experiments, presented as engineering notes rather than generic tiles.
      </p>
      <div className="section-rule" />

      { loading ? 
        <div
          className="flex items-center justify-center w-full h-40"
        >
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[var(--line)] border-t-[var(--primary-bg)]" />
        </div>
      :
      <div className="project-list">
        {repos && repos.map((repo) => (
          <article key={repo.id} className="project-item">
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description provided."}</p>
            <div className="chip-group">
              <span className="chip">
                <GitFork className="h-3.5 w-3.5 text-[var(--primary-bg)]" /> {repo.forks_count}
              </span>
              <span className="chip">
                <Wrench className="h-3.5 w-3.5 text-[var(--accent-warm)]" /> {repo.language || "N/A"}
              </span>
              <span className="chip">
                <Clock className="h-3.5 w-3.5 text-[var(--primary-bg)]" /> {new Date(repo.updated_at).toLocaleDateString()}
              </span>
              <span className="chip">
                <Star className="h-3.5 w-3.5 text-[var(--accent-warm)]" /> {repo.stargazers_count}
              </span>
              {repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noreferrer" className="chip">
                  Live
                </a>
              )}
            </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="project-action"
                aria-label={`Open ${repo.name} repository`}
              >
                <ExternalLink size={18} />
              </a>
          </article>
        ))}
      </div>}

    </section>
  );
}
