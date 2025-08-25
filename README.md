# 8bit RPG Maker

Webブラウザで動く8ビット風2D RPGゲームツクール

[![Remix](https://img.shields.io/badge/Remix-v2.17.0-blue)](https://remix.run)
[![PixiJS](https://img.shields.io/badge/PixiJS-v8.12.0-orange)](https://pixijs.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.9.2-blue)](https://www.typescriptlang.org)
[![Prisma](https://img.shields.io/badge/Prisma-v6.14.0-green)](https://prisma.io)

## 技術スタック

- **Frontend Framework**: Remix v3 (React 18)
- **2D Rendering**: PixiJS v8.12 + @pixi/react v7
- **Database**: Prisma + SQLite (開発) / PostgreSQL (本番)
- **Language**: TypeScript
- **Testing**: Vitest (ユニット), Playwright (E2E)

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env` ファイルをプロジェクトルートに作成し、以下の内容を設定してください：

```env
# Database
DATABASE_URL="file:./dev.db"

# AI API Keys (開発時は空でOK)
GOOGLE_GEMINI_API_KEY=""
GEMINI_PROJECT_ID=""

# Storage (開発時はローカル)
STORAGE_TYPE="local"
STORAGE_BASE_URL="http://localhost:3000/uploads"

# Session
SESSION_SECRET="your-development-session-secret-key"

# Development
NODE_ENV="development"
```

### 3. データベースの初期化

```bash
# Prisma Client生成
npm run db:generate

# マイグレーション実行
npm run db:migrate
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` にアクセスしてください。

## プロジェクト構造

```
app/
  routes/           # Remixルート
  components/       # Reactコンポーネント
  models/           # データモデル・サービス
  utils/            # ユーティリティ関数
  styles/           # スタイルファイル
public/
  uploads/          # 開発用アップロードファイル
prisma/
  schema.prisma     # データベーススキーマ
  migrations/       # マイグレーションファイル
```

## 開発コマンド

```bash
# 開発サーバー
npm run dev

# ビルド
npm run build

# 型チェック
npm run typecheck

# ユニットテスト
npm run test

# E2Eテスト
npm run test:e2e

# Prisma Studio (DBブラウザ)
npm run db:studio
```

## 🎮 実装済み機能

### ✅ コア機能（T1-T8）
- 🗺️ **プロジェクト管理**: 新規プロジェクト作成・SQLiteデータベース管理
- 🗺️ **マップエディタ**: 16×16ピクセル基準のタイル配置・レイヤー管理
- 🎨 **タイルセット管理**: PNG自動スライス・安定ID・タイルパレットUI
- ⚡ **描画ツール**: ペイント・消しゴム・矩形塗り・バケツツール
- 🛡️ **衝突判定システム**: 領域タグ（collision/encounter/damage/trigger/portal）
- 🎯 **レイヤー管理**: 地形・衝突・装飾の3レイヤー切替・可視性制御
- 🎨 **8ビット風レンダリング**: PixiJS v8.12 + NEARESTスケーリング

### 🚧 開発中機能（T9-T25）
- 🎭 **スプライト・アニメーション**: キャラクター定義・歩行アニメーション
- ⚡ **イベントシステム**: ノードベースのゲームイベント作成
- 🌍 **ローカライゼーション**: 多言語対応ダイアログシステム
- 🎮 **プレビュー機能**: リアルタイムゲームプレビュー
- 🤖 **AIタイル生成**: Google Gemini API統合
- 💾 **自動保存/Undo-Redo**: 編集履歴管理
- 📦 **プロジェクトエクスポート**: JSON+アセットZIP生成

## 🎯 使用方法

1. **開発サーバー起動**
   ```bash
   npm run dev
   ```

2. **ブラウザでアクセス**
   ```
   http://localhost:3000
   ```

3. **プロジェクト作成**
   - 「新規プロジェクト」ボタンからプロジェクトを作成
   - プロジェクト名を入力して開始

4. **マップ編集**
   - タイルセットをアップロード（PNG推奨）
   - 描画ツールを使ってマップを作成
   - 衝突レイヤーで領域を設定

5. **高度な機能**
   - レイヤー管理で地形・衝突・装飾を制御
   - 領域タグでエンカウント・ダメージ・トリガーなどを設定

## ライセンス

ISC
