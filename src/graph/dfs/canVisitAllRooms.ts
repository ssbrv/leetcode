function canVisitAllRooms(rooms: number[][]): boolean {
  const q = [rooms[0]];
  const visited = new Set([0]);
  while (q.length > 0) {
    const keys = q.shift()!;
    keys.forEach((k) => {
      if (visited.has(k)) {
        return;
      }

      q.push(rooms[k]);
      visited.add(k);
    });
  }

  return visited.size === rooms.length;
}
