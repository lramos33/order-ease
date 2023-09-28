import { SkeletonContainer } from "./styles";

interface IProps {
  width?: string;
  height?: string;
}

export default function Skeleton({ width = "100%", height = "100%" }: IProps) {
  return <SkeletonContainer style={{ width, height }} />;
}
