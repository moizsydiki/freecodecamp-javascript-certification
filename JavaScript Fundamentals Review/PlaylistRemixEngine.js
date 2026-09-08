const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylists(playlistArr) {
  if (!Array.isArray(playlistArr)) {
    return [];
  }

  return playlistArr.flatMap((playlist, playlistIndex) =>
    playlist.map((track, trackIndex) => ({
      ...track,
      source: [playlistIndex, trackIndex],
    })),
  );
}

const flattenPlaylist = flattenPlaylists(playlists);

function scoreTracks(trackArr) {
  return trackArr.map((track) => ({
    ...track,
    score: track.votes * 10 - Math.abs(track.bpm - 120),
  }));
}

const scoreTrack = scoreTracks(flattenPlaylist);

function dedupeTracks(trackArr) {
  const seen = new Set();

  return trackArr.filter((track) => {
    if (seen.has(track.trackId)) {
      return false;
    }

    seen.add(track.trackId);
    return true;
  });
}

const dedupeTrack = dedupeTracks(scoreTrack);

function enforceArtistQuota(trackArr, maxOccurrences) {
  const artistCounts = {};

  return trackArr.filter((track) => {
    const artist = track.artist;

    artistCounts[artist] = (artistCounts[artist] || 0) + 1;

    return artistCounts[artist] <= maxOccurrences;
  });
}

const enforcedArtistQuota = enforceArtistQuota(dedupeTrack, 1);

function buildSchedule(trackArr) {
  return trackArr.map((track, index) => ({
    slot: index + 1,
    trackId: track.trackId,
  }));
}

console.log(buildSchedule(enforcedArtistQuota));

function remixPlaylist(playlistArr, maxOccurrences) {
  const flattenPlaylist = flattenPlaylists(playlistArr);

  const scoreTrack = scoreTracks(flattenPlaylist);

  const dedupeTrack = dedupeTracks(scoreTrack);

  const enforcedArtistQuota = enforceArtistQuota(dedupeTrack, maxOccurrences);

  return buildSchedule(enforcedArtistQuota);
}
