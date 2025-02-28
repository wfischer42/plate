export const mapNodeIdCode = `let id = 0;

export const mapNodeId = (nodes: any) =>
  nodes.map((node: any) => {
    id++;
    return { ...node, id: id.toString() };
  });
`;

export const mapNodeIdFile = {
  '/common/mapNodeId.ts': mapNodeIdCode,
};
