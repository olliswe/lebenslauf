export enum MessageType {
  Error = "error",
  Warning = "warning",
  Success = "success",
  Info = "info",
  Loading = "loading",
}

export type ToastMessage = {
  msg: string;
  cancel?: boolean;
  close?: boolean;
  persist?: boolean;
  type: MessageType;
};
