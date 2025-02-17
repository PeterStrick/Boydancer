const fs = require('fs');
const ytdl = require('ytdl-core');
const axios = require('axios');

function getHeaders() {
    return {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        Referer: 'https://www.youtube.com/',
        Origin: 'https://www.youtube.com',
    };
}

async function downloadYoutubeAudioFromCobalt(interaction, videoUrl) {
    const response = await axios({
        method: 'POST',
        url: 'https://cobalt-api.kwiatekmiki.com',
        data: JSON.stringify({
            url: videoUrl,
            videoQuality: '720',
            youtubeVideoCodec: 'h264',
            audioFormat: 'wav',
            filenameStyle: 'classic',
            disableMetadata: false,
            downloadMode: 'audio'
        }),
        headers: getHeaders()
    })

    const urlObject = response.data.url;
    
    if (response.status !== 200) {
        throw Error(`Error: Something went wrong while fetching the audio file. (${response.error.code || response.text || response.statusText || ''})`);
    }

    const outputPath = `./files/temporaryYoutube/${interaction.user.id}.wav`;
    const writer = fs.createWriteStream(outputPath);

    const fileResponse = await axios({ url: urlObject, method: 'GET', responseType: 'stream' });
    fileResponse.data.pipe(writer);

    writer.on('error', (err) => {
         console.error('Error:', err);
    });
}

module.exports = { downloadYoutubeAudioFromCobalt };
