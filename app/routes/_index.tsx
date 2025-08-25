import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "8bit RPG Maker" },
    { name: "description", content: "Web-based 8-bit style RPG game maker" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-400">
          8bit RPG Maker
        </h1>
        <p className="text-lg mb-8 text-gray-300">
          Webブラウザで動く8ビット風2D RPGゲームツクール
        </p>
        <div className="space-x-4">
          <a
            href="/editor"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            エディタを開く
          </a>
          <a
            href="/preview"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            プレビュー
          </a>
        </div>
      </div>
    </div>
  );
}
