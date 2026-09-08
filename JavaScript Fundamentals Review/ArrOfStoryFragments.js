const shuffledFragments = [
  {
    id: 15,
    text: "and, after a time, passed the place where the Hare was sleeping.",
  },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  {
    id: 11,
    text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,",
  },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  {
    id: 1,
    text: "A Hare was making fun of the Tortoise one day for being so slow.",
  },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  {
    id: 6,
    text: "The Hare was much amused at the idea of running a race with the Tortoise,",
  },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

const compactFragments = (fragments) => {
  const compacted = fragments.filter((fragment) => fragment !== undefined);

  if (compacted.length !== fragments.length) {
    console.log(
      `[COMPACTED] Removed ${fragments.length - compacted.length} undefined fragment(s)`,
    );
  }

  return compacted;
};

const compactedShuffledFragments = compactFragments(shuffledFragments);

const sortFragments = (fragments) => {
  const sorted = [];

  for (const fragment of fragments) {
    let inserted = false;

    for (let i = 0; i < sorted.length; i++) {
      if (fragment.id < sorted[i].id) {
        sorted.splice(i, 0, fragment);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      sorted.push(fragment);
    }
  }

  return sorted;
};

const sortedFragments = sortFragments(compactedShuffledFragments);

const dedupeFragments = (fragments) => {
  const deduped = [];
  const seenIds = new Set();

  for (const fragment of fragments) {
    if (seenIds.has(fragment.id)) {
      console.log(
        `[DEDUPED] Removed duplicate fragment with id ${fragment.id}.`,
      );
    } else {
      seenIds.add(fragment.id);
      deduped.push(fragment);
    }
  }

  return deduped;
};

const dedupedFragments = dedupeFragments(sortedFragments);

const fillMissingFragments = (fragments) => {
  if (fragments.length === 0) {
    return [];
  }

  const filled = [];

  const lowestId = fragments[0].id;
  const highestId = fragments[fragments.length - 1].id;

  let fragmentIndex = 0;

  for (let id = lowestId; id <= highestId; id++) {
    if (
      fragmentIndex < fragments.length &&
      fragments[fragmentIndex].id === id
    ) {
      filled.push(fragments[fragmentIndex]);
      fragmentIndex++;
    } else {
      const placeholder = {
        id: id,
        text: "[...]",
      };

      console.log(`[FILLED] Added missing fragment with id ${id}.`);
      filled.push(placeholder);
    }
  }
  return filled;
};

const filledFragments = fillMissingFragments(dedupedFragments);

const assembleStory = (fragments) => {
  return fragments.map((fragment) => fragment.text).join("\n");
};

console.log(assembleStory(filledFragments));
