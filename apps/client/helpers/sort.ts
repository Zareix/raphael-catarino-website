type ItemWithRank = any & {
  rank: number;
};
export const sortByRank = (a: ItemWithRank, b: ItemWithRank) => a.rank - b.rank;
