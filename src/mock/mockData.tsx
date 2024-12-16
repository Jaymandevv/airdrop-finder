import { IProject } from "@/type";

export const mockData: IProject[] = [
  {
    _id: "1",
    created_at: new Date().toDateString(),
    image: "https://freeairdrop.io/Images%20for/Airdrops/nexus2.webp",
    category: "Depin",
    end_date: new Date(1).toDateString(),
    description: "The Nexus network is a massively-parallelized proof network for executing and proving the Nexus zkVM.",
    steps: [
      "Visit the Nexus Beta Prover Network.",
      "Click 'Connect' to start running cycles.",
      "Click 'My Profile' icon from bottom and save your email (Mandatory) and verify your e-mail.",
      "Now stay connected and let the page remain open to earn points.",
      "You can run this on multiple devices and can connect same eamil.",
      "You can also run the Client on server to earn more points.",
      "We recommend not clearing the cache or data on your browser.",
      "👋 Got Stuck Somewhere? You can ask for help in our Telegram Group.",
    ],
    project_name: "Nexus",
    project_symbol: "Nexus",
    project_logo: "https://freeairdrop.io/Images%20for/Airdrops/nexus.webp",
    project_socials: {
      discord: "https://discord.gg/nexus-xyz",
      twitter: "https://x.com/NexusLabsHQ",
      website: "https://nexus.xyz/",
    },
    status: "confirmed",
  },

  {
    _id: "2",
    created_at: new Date().toDateString(),
    image: "https://freeairdrop.io/Images%20for/Airdrops/mitosis2.webp",
    category: "Testnet",
    end_date: new Date(1).toDateString(),
    description: "Mitosis is an Ecosystem-Owned Liquidity L1 blockchain that redefines the DeFi LP experience.",
    steps: [
      "Visit the Mitosis Testnet Page (Mobile Users can use Kiwi Browser).",
      "Connect your Wallet and switch to Sepolia Network.",
      "Go to My Page and enter Referral Code: DN5PJ0.",
      "Claim Test tokens from the Faucet.",
      "Now earn XP by using Faucet daily, doing Deposit, voting, EOL-opt in and exploring dApps from the Dashboard.",
      "Also earn more XP by joining their Community Campaigns.",
      "Your XP will be converted into MITO tokens upon mainnet launch.",
      "👋 Got Stuck Somewhere? You can ask for help in our Telegram Group.",
    ],
    project_name: "Mitosis",
    project_symbol: "Mito",
    project_logo: "https://freeairdrop.io/Images%20for/Airdrops/mitosis.webp",
    project_socials: {
      discord: "https://discord.gg/mitosis",
      twitter: "https://x.com/MitosisOrg",
      website: "https://mitosis.org/",
    },
    status: "Potential",
  },
];
