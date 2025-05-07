import appleSystemStatusMenuBar from "../assets/apple_system_status_menu_bar.png";
import chatgptContinueButton from "../assets/chatgpt_continue_button.png";
import iconStudio from "../assets/icon_studio.png";
import redSheetCamera from "../assets/red_sheet_camera.png";
import photon from "../assets/photon.png";
import neumorphismForSwiftui from "../assets/neumorphism_for_swiftui.png";
import level from "../assets/level.png";
import memo from "../assets/memo.png";
import trafficIcCardBalanceReader from "../assets/traffic_ic_card_balance_reader.png";
import twilysis from "../assets/twilysis.png";
import digitalClock from "../assets/digital_clock.png";
import electricBulletinBoard from "../assets/electric_bulletin_board.png";
import githubContributionsMenuBar from "../assets/github_contributions_menu_bar.png";
import gSearch from "../assets/g_search.png";
import zennWidget from "../assets/zenn_widget.png";
import shadowBird from "../assets/shadow_bird.png";
import shogi from "../assets/shogi.png";
import swipeCounter from "../assets/swipe_counter.png";
import yubikiriMaster from "../assets/yubikiri_master.png";
import qiitaWidget from "../assets/qiita_widget.png";

export const appData = [
  {
    section: "Web",
    items: [
      {
        url: "https://taishin-miyamoto.com/ShadowBan/",
        iconSrc: shadowBird,
        title: "ShadowBird Web",
        details: "Twitterアカウントのシャドウバンを確認できます",
      },
      {
        url: "https://taishin-miyamoto.com/Twilysis/",
        iconSrc: twilysis,
        title: "Twilysis",
        details: "Twitterの投稿の関連ワードを調べることができます",
      },
    ],
  },
  {
    section: "iOS",
    items: [
      {
        url: "https://apps.apple.com/jp/app/g-search/id1570395606",
        iconSrc: gSearch,
        title: "G-Search",
        details: "荒野行動のパス打ち補助アプリ",
      },
      {
        url: "https://apps.apple.com/jp/app/%E6%8C%87%E5%88%87%E3%82%8A%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC/id1576815188",
        iconSrc: yubikiriMaster,
        title: "指切りマスター",
        details: "荒野行動の指切り補助アプリ",
      },
      {
        url: "https://apps.apple.com/jp/app/%E3%83%A1%E3%83%A2-cui%E9%A2%A8/id1600911080",
        iconSrc: memo,
        title: "メモ -CUI風-",
        details: "ハッカー風メモアプリ",
      },
      {
        url: "https://apps.apple.com/jp/app/photon-%E5%86%99%E7%9C%9F%E6%95%B4%E7%90%86/id1614843015",
        iconSrc: photon,
        title: "PhotoN",
        details: "スワイプ式の写真整理アプリ",
      },
      {
        url: "https://apps.apple.com/jp/app/-%20%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E6%99%82%E8%A8%88%20-/id1615190371",
        iconSrc: digitalClock,
        title: "- デジタル時計 -",
        details: "シンプルなデジタル時計アプリ",
      },
      {
        url: "https://apps.apple.com/jp/app/%E9%9B%BB%E5%85%89%E6%8E%B2%E7%A4%BA%E6%9D%BF/id1618602482",
        iconSrc: electricBulletinBoard,
        title: "- 電光掲示板 -",
        details: "電光掲示板アプリ",
      },
      {
        url: "https://apps.apple.com/jp/app/%E6%B0%B4%E6%BA%96%E5%99%A8/id1621303604",
        iconSrc: level,
        title: "- 水準器 -",
        details: "シンプルな水準器アプリ",
      },
      {
        url: "https://apps.apple.com/jp/app/swipe-counter/id6443832677",
        iconSrc: swipeCounter,
        title: "swipe-counter",
        details: "スワイプ式のカウントアプリ",
      },
      {
        url: "https://apps.apple.com/us/app/qiitawidget/id6448868888",
        iconSrc: qiitaWidget,
        title: "QiitaWidget",
        details: "Qiitaの記事一覧をホーム画面に表示",
      },
      {
        url: "https://apps.apple.com/us/app/zennwidget/id6448756495",
        iconSrc: zennWidget,
        title: "ZennWidget",
        details: "Zennの記事一覧をホーム画面に表示",
      },
      {
        url: "https://apps.apple.com/jp/app/redsheetcamera/id6451382182",
        iconSrc: redSheetCamera,
        title: "赤シートカメラ",
        details: "赤シートで暗記を促進",
      },
      {
        url: "https://apps.apple.com/jp/app/%E4%BA%A4%E9%80%9A%E7%B3%BBic%E6%AE%8B%E9%AB%86/id6467140002",
        iconSrc: trafficIcCardBalanceReader,
        title: "交通系IC残高",
        details: "交通系ICカードの残高を確認",
      },
      {
        url: "https://apps.apple.com/jp/app/%E3%81%B5%E3%81%9F%E3%82%8A%E3%81%A7%E5%B0%86%E6%A3%8B/id6744576655",
        iconSrc: shogi,
        title: "ふたりで将棋",
        details: "対面対局に特化した、将棋アプリ",
      },
    ],
  },
  {
    section: "MacOS",
    items: [
      {
        url: "https://apps.apple.com/jp/app/neumorphism-for-swiftui/id1619280099",
        iconSrc: neumorphismForSwiftui,
        title: "Neumorphism for SwiftUI",
        details: "SwiftUI用Neumorphismを作成できます",
      },
      {
        url: "https://apps.apple.com/jp/app/contributions-graphs-in-menu/id1622632080",
        iconSrc: githubContributionsMenuBar,
        title: "Contributions Graphs in Menu",
        details: "メニューバーでGitHubの草を確認できます",
      },
      {
        url: "https://taishin-miyamoto.com/AppleSystemStatusMenuBar/",
        iconSrc: appleSystemStatusMenuBar,
        title: "AppleSystemStatusMenuBar",
        details: "メニューバーでAppleのSystemStatusを確認できます",
      },
      {
        url: "https://apps.apple.com/app/iconstudio/id1672032163",
        iconSrc: iconStudio,
        title: "IconStudio",
        details: "アプリ用のアイコンを自動生成できます",
      },
    ],
  },
  {
    section: "Chrome拡張",
    items: [
      {
        url: "https://chrome.google.com/webstore/detail/chatgpt-continue-button/fnjdboejkfbaeijiogeaickgfmjopdno?hl=ja&authuser=0",
        iconSrc: chatgptContinueButton,
        title: "ChatGPT Continue Button",
        details: "ChatGPTに途切れた回答の続きをリクエストできます",
      },
    ],
  },
  {
    section: "TwitterBot",
    items: [
      {
        url: "https://twitter.com/ShadowBirdBot",
        iconSrc: shadowBird,
        title: "ShadowBird Bot",
        details: "Twitterアカウントのシャドウバンを確認できます",
      },
    ],
  },
];
