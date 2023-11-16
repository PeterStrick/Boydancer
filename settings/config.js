require('dotenv').config();
module.exports = {
    news: {
        version: '2.2.1',
        new: [
            '- Bugfixes',
            '- Premium can now go up to 20 Minutes¹',
            '',
            '¹: As long as the generated Video is below 100 MB, otherwise it will bug out for now'
        ],
    },
    TOKEN: process.env.TOKEN,
    embed: {
        color: "#220f80",
        wrongcolor: "#8a0808",
        footertext: "Made by AshTheDergy | Fluffy Derg Productions, hosted by uwu_peter"
    },
    slash: {
        global: true,
        guildID: "1099007046902353972",
    },
    options: {
        embedFooter: true,
    },
    emoji: {
        error: "❌",
        success: "✅",
        ping: "🏓",
    },
    whitelisted: ['817843037593403402', '358936084278673415', '762219738570555412'],
    error_dm: '762219738570555412',
    correctFile: [".mp3", ".wav", ".aac", ".flac", ".ogg", ".mp4", ".avi", ".mov", ".webm", ".3gp", ".mkv", ".qt"],
    danceEnd_Premium: 1200,
    danceEnd_Normal: 120,
    maxInput_Premium: 1800,
    maxInput_Normal: 600,
    maxMinute_Premium: 30,
    maxMinute_Normal: 10,
    strings: {
        options: {
            viber: "Select your background Viber",
            file: "A file (.mp3, .mp4, etc)",
            link: "A video/song link (youtube, soundcloud, spotify and file links only)",
            search: "Search by a YouTube video title",
            start: "(format 0:00) Leaving this blank will cause it to use the audio from 0:00",
            end: "(format 0:00) Leaving this blank will make the video 1 minute long (20 minutes for premium)",
            speed: "Choose audio speed percentage (50% - 200%)",
            bpm: "Choose Viber bpm (beats per minute) (max 500)",
        },
        error: {
            command_not_found: "%s `%s` Command Not Found",
            video_generation: "An error occurred while generating the video :( (Make sure the Video is not Age Restricted)",
            video_generation_detailed: "An error occurred while generating the video. (Make sure the Video is not Age Restricted):\n\n||%s||",
            video_generation_detailed_dm: "Error in Guild: %s, User: <@%s>:\n\n%s",
            invalid_everything: "%s - ** Please provide a __Link__ or __File__ (use `/help boydancer` for more information) **",
            invalid_link: "%s - ** Please provide a supported link (supported are __Youtube__, __Spotify__, __SoundCloud__ and __Audio/Video__ links (use `/help boydancer` for more information) **",
            invalid_link_soundcloud: "%s - ** The __SoundCloud Link__ you provided does not exist. __Shortened Links__ also don't work **",
            invalid_link_http: "%s - ** The provided Audio URL must start with `https://` **",
            invalid_file: "%s - Please use a correct File (use `/help boydancer` for more information)",
            time_over_danceEnd_limit: "%s - ** The time between __START__ and __END__ is over `%s` seconds **",
            time_too_big: "%s - ** Please ensure your __START__ and/or __END__ times are shorter than the video's duration **",
            time_is_the_same: "%s - ** The time between __START__ and __END__ has to be at least `1` second **",
            time_incorrect: "%s - ** Please insert a correct __START__ and/or __END__ time (use `/help boydancer` for more information) **",
            endtime_too_big: "%s - ** Please ensure your __END__ time is shorter than the video **",
            endtime_is_0: "The __END__ time cannot be `0` seconds",
            endtime_incorrect: "%s - ** Please insert a correct __END__ time **",
            starttime_too_big: "%s - ** Please ensure your __START__ time is shorter than __END__ time **",
            starttime_bigger_than_video: "%s - ** Please make sure your __START__ time is smaller than the video **",
            starttime_incorrect: "%s - ** Please insert a correct __START__ time **",
            file_too_big: "%s - The File you provided is over __50 MB__",
            soundcloud_song_too_big: "%s - ** Please ensure that the __SoundCloud Song__ is __10 minutes (600 seconds)__ or shorter **",
            spotify_song_too_big: "%s - ** Please ensure that the __Spotify Song__ is __10 minutes (600 seconds)__ or shorter **",
            youtube_is_livestream: ":blush: - ** Please ensure the __Youtube Video__ is not a __Livestream__ **",
            youtube_too_long: "%s - ** Please ensure that the __YouTube Video__ is __10 minutes (600 seconds)__ or shorter **",
            youtube_video_does_not_exist: "%s - ** The __Youtube Video__ you provided Does Not Exist **",
            youtube_search_not_found: "Or the video doesn't exist :<",
        },
        generation: "Generating video... <a:boypet2:1168249848055734343>",
        epilepsy: "\n<:boys:1168248994108030977> EPILEPSY WARNING <:boys:1168248994108030977>\n",
        finished: "Here is your boydancer:",
        cooldown: "You are On Cooldown, wait `%s` Seconds",
        description: "Apply audio to the boykisser dancing video. Maximum of 120 seconds",
        random_invalid_replies: [`Ha Ha very funny. "lem e putt .gsgl gggmgm as jok" :nerd::nerd::nerd:`, `No...`, `Kindly deactivate yourself :blush:`, `Mods, crush his skull`, `Mods, crush his balls`, `Nuh uh`, `I'll make you cease to exist :3`, `https://cdn.discordapp.com/attachments/873603423998705718/1145258850132443206/8apAlKE.gif`, `https://cdn.discordapp.com/attachments/873603423998705718/1145258963676430346/cqtykgb.gif`, `https://cdn.discordapp.com/attachments/873603423998705718/1145985376515788800/pjSHLOr.png`],
        generation_replies: ["Generating your video... <a:boypet2:1168249848055734343>", "Cooking up your video... <:soupkisser:1174679354958155848>", "Generating your video :3 <a:boypet2:1168249848055734343>", "Meow mrow~ miau. (Generating your video) <a:boypet2:1168249848055734343>"],
    },
    ViberType: {
        BoyDancer: 1,
        BoyJammer: 2
    },
    Spotify: {
        executable: process.env.SPOTIFY_AAC_EXECUTABLE,
        cookies: process.env.SPOTIFY_COOKIES,
        widevine_device: process.env.WIDEVINE_DEVICE_FILE,
        ffmpeg: process.env.FFMPEG_EXECUTABLE
    }
};
