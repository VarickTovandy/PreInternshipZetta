// Number 1
const songs = [
    {
        title: "シャルル (feat. 東雲絵名 & 暁山瑞希)",
        artist: "HoneyWorks feat. 東雲絵名 & 暁山瑞希",
        genre: "Vocaloid, J-Pop",
        duration: "4:08"
    },
    {
        title: "天体観測 (Tenmon Kansoku)",
        artist: "BUMP OF CHICKEN",
        genre: "J-Rock",
        duration: "5:28"
    },
    {
        title: "霽れゆく空は、今見上げる",
        artist: "Leo/need",
        genre: "Vocaloid, J-Pop",
        duration: "2:57"
    },
    {
        title: "消失 (Disappearance)",
        artist: "初音ミク",
        genre: "Vocaloid, J-Pop",
        duration: "4:04"
    },
    {
        title: "ロキ (Roki)",
        artist: "みく feat. GUMI",
        genre: "Vocaloid, J-Pop",
        duration: "4:06"
    },
    {
        title: "Lose Yourself",
        artist: "Eminem",
        genre: "Rap",
        duration: "5:26"
    },
    {
        title: "Godzilla",
        artist: "Eminem feat. Juice Wrld",
        genre: "Rap",
        duration: "3:30"
    },
    {
        title: "Rap God",
        artist: "Eminem",
        genre: "Rap",
        duration: "6:03"
    },
    {
        title: "In Da Club",
        artist: "50 Cent",
        genre: "Rap",
        duration: "4:00"
    },
    {
        title: "Stan",
        artist: "Eminem feat. Dido",
        genre: "Rap",
        duration: "6:44"
    }
];

// Number 2
function groupSongsByArtist(songs) {
    const groupedSongs = {};
    songs.forEach(song => {
        if (!groupedSongs[song.artist]) {
            groupedSongs[song.artist] = [];
        }
        groupedSongs[song.artist].push(song);
    });
    return groupedSongs;
}

// Number 3
function groupSongsByGenre(songs) {
    const groupedSongs = {};
    songs.forEach(song => {
        if (!groupedSongs[song.genre]) {
            groupedSongs[song.genre] = [];
        }
        groupedSongs[song.genre].push(song);
    });
    return groupedSongs;
}

// Number 4
function groupSongsLessThanOneHour(songs) {
    const maxDuration = 60 * 60;
    let playlistDuration = 0;
    const playlist = [];

    const shuffledSongs = songs.slice().sort(() => Math.random() - 0.5);

    for (const song of shuffledSongs) {
        const durationInSeconds = song.duration.match(/(\d+):(\d+)/);
        if (!durationInSeconds) continue;
        const songDuration = parseInt(durationInSeconds[1], 10) * 60 + parseInt(durationInSeconds[2], 10);

        if (playlistDuration + songDuration <= maxDuration) {
            playlist.push(song);
            playlistDuration += songDuration;
        } else {
            break;
        }
    }

    return playlist;
}


console.log("Songs grouped by artist:");
console.log(groupSongsByArtist(songs));

console.log("\nSongs grouped by genre:");
console.log(groupSongsByGenre(songs));

console.log("\nRandom song less than 1 hour:");
console.log(groupSongsLessThanOneHour(songs));