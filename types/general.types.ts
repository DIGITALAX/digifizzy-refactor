export type UseIssuesResult = {
  handleIssueDown: (currentIssue: number) => void;
  handleIssueUp: (currentIssue: number) => void;
  currentIssue: number;
  allIssues: Array<number>;
};
