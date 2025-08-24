export interface TextAssets {
  stageIntro: Record<string, string>;
  stageHint: Record<string, string>;
  stageOutro: Record<string, string>;
  bonusIntro: string;
  hustleShop: {
    speed: string;
    doubleThrow: string;
    stamina: string;
    shield: string;
  };
  upsellCTA: Record<string, { title: string; description: string }>;
}

export const text: TextAssets = {
  stageIntro: {
    awareness: "Awareness: Pedal out and make some noise!",
    consideration: "Consideration: Deliver value and trust-building content!",
    decision: "Decision: Time to close the deal!",
    advocacy: "Advocacy: Keep your customers happy and they’ll spread the word!"
  },
  stageHint: {
    awareness: "Build a following to unlock your link-in-bio hub.",
    consideration: "Offer something valuable to grow your list.",
    decision: "Make it easy to say yes.",
    advocacy: "Delight clients to earn referrals."
  },
  stageOutro: {
    awareness: "Great job building awareness!",
    consideration: "Nice! Your leads are warming up.",
    decision: "You closed the deal!",
    advocacy: "Your clients are your champions!"
  },
  bonusIntro: "Bonus! Play Client Battleship for extra hustle credits.",
  hustleShop: {
    speed: "Speed Boost: Pedal faster next round.",
    doubleThrow: "Double Throw: Throw two assets at once for a limited time.",
    stamina: "Stamina Juice: Start with full energy.",
    shield: "Algorithm Shield: Block one distraction."
  },
  upsellCTA: {
    awareness: {
      title: "Upgrade Your Presence",
      description: "Add a brand identity guide to improve awareness."
    },
    consideration: {
      title: "Maximize Your Leads",
      description: "Add email automation for faster nurture."
    },
    decision: {
      title: "Boost Conversions",
      description: "Add a funnel strategy session."
    },
    advocacy: {
      title: "Go Pro Mode",
      description: "Add CRM and blog engine to unlock endless mode."
    }
  }
};

export default text;
