/* A TypeScript declaration file. It is telling TypeScript that the NodeJS.ProcessEnv interface has the
properties API_BASE_URL, GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET, DISCORD_ID,
DISCORD_SECRET, FACEBOOK_ID, and FACEBOOK_SECRET. */
declare namespace NodeJS {
  export interface ProcessEnv {
    API_BASE_URL: string
    GITHUB_ID: string
    GITHUB_SECRET: string
  }
}
