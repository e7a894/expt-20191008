export interface IButton {
  text: string;
  value: string;
  click: () => void;
}

export interface IDialog {
  buttons: IButton[];
  returnValue: string;
  show: () => Promise<string>;
}
