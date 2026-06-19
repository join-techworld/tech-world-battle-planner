import React from 'react';
import CopyButton from './CopyButton';

const GeneratedOutput = ({ data }) => {
  if (!data) return null;

  const { title, hostName, featuredBattler, date, timeZones, target, prize, rules, cta, theme } = data;

  const generateSummary = () => `🔥 EVENT SUMMARY: ${title} 🔥
Host: ${hostName}
Opponent: ${featuredBattler}
Date: ${date}
Time: ${timeZones}
${target ? `Goal/Target: ${target}` : ''}
${prize ? `Prize: ${prize}` : ''}
${rules ? `Rules: ${rules}` : ''}
${theme ? `Theme: ${theme}` : ''}`;

  const generateFlyerText = () => `🚨 TIKTOK LIVE BATTLE ALERT 🚨
${hostName} VS ${featuredBattler}
📅 ${date}
⏰ ${timeZones}

Join us for the ${title}!
${cta ? cta : 'Be there and support!'}
${prize ? `🎁 Giveaway: ${prize}` : ''}`;

  const generateTikTokPromo = () => `It's going down! 🥊 ${hostName} vs ${featuredBattler} in the ${title} battle!
📅 ${date} | ⏰ ${timeZones}

${target ? `We're aiming for ${target}! ` : ''}${cta ? cta : "Don't miss out, tap in!"}
#TikTokLive #LiveBattle #${hostName.replace(/\s+/g, '')} #${featuredBattler.replace(/\s+/g, '')} #BoxBattle`;

  const generateVoiceover = () => `Yo guys! Mark your calendars for ${date} at ${timeZones} because ${hostName} is taking on ${featuredBattler} in the epic ${title} battle! ${prize ? `We've got an amazing giveaway: ${prize}. ` : ''}${target ? `We are pushing hard for ${target}. ` : ''}${cta ? cta : "Come show your support, tap that screen, and let's get this win!"} See you there!`;

  const generateReminder = () => `Hey everyone! Just a quick reminder that the ${title} battle against ${featuredBattler} is happening on ${date} at ${timeZones}. We need your support! ${cta ? cta : "Please tune in and help us win!"}`;

  const OutputSection = ({ title, content }) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <CopyButton textToCopy={content} />
      </div>
      <div className="bg-gray-50 p-4 rounded-md border border-gray-200 whitespace-pre-wrap font-mono text-sm text-gray-700">
        {content}
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Your Battle Materials</h2>

      <OutputSection title="Event Summary" content={generateSummary()} />
      <OutputSection title="Flyer Text" content={generateFlyerText()} />
      <OutputSection title="TikTok Promo Caption" content={generateTikTokPromo()} />
      <OutputSection title="30-Second Voiceover Script" content={generateVoiceover()} />
      <OutputSection title="Short Reminder Message" content={generateReminder()} />
    </div>
  );
};

export default GeneratedOutput;
