export interface IButton {
  text: string;
  value?: string;
  click?: () => void;
}

export interface IDialog {
  buttons: IButton[];
  message: string;
  returnValue: string;
  show: () => Promise<string>;
}
