import { useState } from "react";
import { UseIssuesResult } from "../../../types/general.types";

const useIssues = (): UseIssuesResult => {
  const [currentIssue, setCurrentIssue] = useState<number>(1);

  const allIssues: Array<number> = Array.from(Array(16).keys());

  const handleIssueDown = (currentIssue: number): void => {
    if (currentIssue !== 1) {
      setCurrentIssue(currentIssue - 1);
    }
  };

  const handleIssueUp = (): void => {
    if (currentIssue !== allIssues.length) {
      setCurrentIssue(currentIssue + 1);
    }
  };

  return { currentIssue, handleIssueDown, handleIssueUp, allIssues };
};

export default useIssues;
