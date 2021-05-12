export interface BottomSheetPropsT {
  title: string;
  actions: string[];
  onActionSelected: (index: number) => void;
}
