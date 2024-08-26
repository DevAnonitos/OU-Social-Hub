export type useDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export type DotButtonProps = {
  selected: boolean;
  onClick: () => void;
};