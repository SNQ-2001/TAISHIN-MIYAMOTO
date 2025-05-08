import { ServiceStatus } from "./ServiceStatus";

// 各アプリ項目の型
export interface AppData {
  // リンクURL
  url: string;
  // アイコンのソース画像
  iconSrc: string;
  // アプリのタイトル
  title: string;
  // アプリの詳細説明
  details: string;
  // アプリのサービス提供状況
  status: ServiceStatus;
}
