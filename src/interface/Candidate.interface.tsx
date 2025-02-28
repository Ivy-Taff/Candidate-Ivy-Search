// TODO: Create an interface for the Candidate objects returned by the API
interface GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
  }
  
  interface GitHubUserDetails extends GitHubUser {
    name?: string;
    company?: string;
    location?: string;
    bio?: string;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
  }