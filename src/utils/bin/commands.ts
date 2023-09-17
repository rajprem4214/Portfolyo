/* eslint-disable prettier/prettier */
// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  // const commands = Object.keys(bin).sort().join(', ');
  const commands = [
    { command: 'about', job: 'To know about me' },
    { command: 'projects', job: 'To see my projects' },
    { command: 'github', job: 'To check my commits' },
    { command: 'linkedin', job: 'To stalk my Linkedin' },
    { command: 'resume', job: 'For Resume' },
    { command: 'email', job: 'For collaboration' },
    { command: 'whoami', job: 'Who am I' },
    { command: 'weather', job: 'Check if its raining' },
    { command: 'quote', job: 'Start your day with a quote' },
    { command: 'google', job: 'To search anything' },
    { command: 'date', job: 'To check your date' },
    { command: 'cd', job: 'Try it' },
    { command: 'sudo', job: 'To wander in heaven' },
  ];
  var c = '';
  for (let i = 0; i < commands.length; i++) {
    // if (i % 7 === 0) {
    //   c += Object.keys(bin).sort()[i - 1] + '\n';
    // } else {
    //   c += Object.keys(bin).sort()[i - 1] + '\n';
    // }
    c += commands[i].command + ' - ' + commands[i].job + '\n';
  }
  return `Welcome Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
// export const repo = async (args: string[]): Promise<string> => {
//   window.open(`${config.repo}`);
//   return 'Opening Github repository...';
// };

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `Bhagwaan ka diya sab kuch hai !
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

// export const duckduckgo = async (args: string[]): Promise<string> => {
//   window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
//   return `Searching duckduckgo for ${args.join(' ')}...`;
// };

// export const bing = async (args: string[]): Promise<string> => {
//   window.open(`https://bing.com/search?q=${args.join(' ')}`);
//   return `Wow, really? You are using bing for ${args.join(' ')}?`;
// };

// export const reddit = async (args: string[]): Promise<string> => {
//   window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
//   return `Searching reddit for ${args.join(' ')}...`;
// };

// Typical linux commands
// export const echo = async (args: string[]): Promise<string> => {
//   return args.join(' ');
// };

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

// export const vim = async (args: string[]): Promise<string> => {
//   return `'vim' is so outdated. how about 'nvim'?`;
// };

// export const nvim = async (args: string[]): Promise<string> => {
//   return `'nvim'? too fancy. why not 'emacs'?`;
// };

// export const emacs = async (args?: string[]): Promise<string> => {
//   return `you know what? just use vscode.`;
// };

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=MxGItnRhsBI', '_blank'); // ...I'm sorry
  return `Jai Shree Ram  `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
██████╗ ██████╗ ███████╗███╗   ███╗    ██████╗  █████╗      ██╗
██╔══██╗██╔══██╗██╔════╝████╗ ████║    ██╔══██╗██╔══██╗     ██║
██████╔╝██████╔╝█████╗  ██╔████╔██║    ██████╔╝███████║     ██║
██╔═══╝ ██╔══██╗██╔══╝  ██║╚██╔╝██║    ██╔══██╗██╔══██║██   ██║
██║     ██║  ██║███████╗██║ ╚═╝ ██║    ██║  ██║██║  ██║╚█████╔╝
╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝    ╚═╝  ╚═╝╚═╝  ╚═╝ ╚════╝ 

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'sudo' for peace of mind.
`;
};
