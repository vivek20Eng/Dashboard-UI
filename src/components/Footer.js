import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <footer className="w-full h-[5rem] flex justify-center items-center bg-[rgb(26,26,39)] gap-5 border-t border-slate-400">
      <p>Created by Vivek</p>
      <a
        href="https://github.com/vivek20Eng/Dashboard-UI"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <GitHubIcon />
        <span className="ml-2">GitHub Repository</span>
      </a>
    </footer>
  );
}
